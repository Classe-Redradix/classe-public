import React, { Component, useLayoutEffect, useRef, useState } from 'react'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-dom'
import demoImage from '../../../assets/images/demo.png'

const shaders = Shaders.create({
  dots: {
    frag: GLSL`
      precision highp float;
      precision highp int;

      uniform vec3      iResolution;
      uniform float     iScroll;
      uniform sampler2D iChannel0;

      varying vec2 uv;

      const float SIZE_DOTS = 3.;
      const float E = 0.1;

      highp float rand(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt= dot(co.xy ,vec2(a,b));
        highp float sn= mod(dt,3.14);
        return fract(sin(sn) * c);
      }

      float sat(float v) {
          return clamp(v, 0., 1.);
      }

      float luma(vec3 color) {
        return dot(color, vec3(0.299, 0.587, 0.114));
      }

      float luma(vec4 color) {
        return dot(color.rgb, vec3(0.299, 0.587, 0.114));
      }

      // height-adjusted
      void mainImage( out vec4 fragColor, in vec2 uv ) {
        float foobar = min(iResolution.x, iResolution.y) / SIZE_DOTS;

        float ar = iResolution.x / iResolution.y;
        vec2 sizeTrama = vec2(ar, 1.) * foobar;

        vec2 cellUv = mod(uv, 1. / sizeTrama) * sizeTrama;
        cellUv -= 0.5;
        cellUv *= 1.8;

        vec2 uvCenter = floor(uv * sizeTrama) / sizeTrama;

        float randGrey = rand(uvCenter);
        float randGrey2 = rand(uvCenter + vec2(5.));
        float randGrey3 = rand(uvCenter + vec2(7.3));

        vec4 tex0 = texture2D(iChannel0, uvCenter);
        float tex0Grey = 1.001 - luma(tex0);
        tex0Grey = sqrt(tex0Grey);

        float mixFactor = iScroll;
        float mixFactor1 = smoothstep(0.0, sqrt(randGrey) + 0.1, sat(mixFactor));

        float texGrey =
            mix(randGrey2 * randGrey2 / 2., tex0Grey, mixFactor1 * mixFactor1 * mixFactor1);

        float centerDist = length(cellUv);
        float circle = smoothstep(texGrey - E, texGrey + E, centerDist);

        fragColor = vec4(vec3(circle), 1.0);
      }

      void main( void ){
        vec4 color = vec4(0.0,0.0,0.0,1.0);
        mainImage( color, uv );
        color.w = 1.0;
        gl_FragColor = color;
      }
    `,
  },
})

const ImageDots = () => {
  const imageRef = useRef(null)
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })
  const [scroll, setScroll] = useState(0)

  const handleImageRef = (ref) => {
    imageRef.current = ref

    if (ref === null) return
    ref.addEventListener('load', () =>
      setSize({
        width: imageRef.current.clientWidth,
        height: imageRef.current.clientHeight,
      })
    )
  }

  const uniforms = {
    iResolution: [
      size.width / window.devicePixelRatio,
      size.height / window.devicePixelRatio,
      1,
    ],
    iChannel0: demoImage,
    iScroll: scroll,
  }

  const resizeCanvas = () =>
    setSize({
      width: imageRef.current.clientWidth,
      height: imageRef.current.clientHeight,
    })

  const updateScroll = () => {
    const imageRect = imageRef.current.getBoundingClientRect()
    const topImage = imageRect.top
    const bottomImage = imageRect.bottom
    const centerImage = (topImage + bottomImage) / 2
    const innerHeight = window.innerHeight
    const currentScroll = 1 - (centerImage - innerHeight / 2) / innerHeight

    setScroll(Math.min(1, Math.max(0, currentScroll)))
  }

  useLayoutEffect(() => {
    const handleResize = () => resizeCanvas()
    const handleScroll = () => updateScroll()
    resizeCanvas()

    const wrapper = document.querySelector('.mainWrapper')
    updateScroll()

    window.addEventListener('resize', handleResize)
    wrapper.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      wrapper.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="imageDots">
      <img
        className="imageDots-image"
        src={demoImage}
        alt=""
        ref={handleImageRef}
      />
      <Surface width={size.width} height={size.height}>
        <Node shader={shaders.dots} uniforms={uniforms} />
      </Surface>
    </div>
  )
}

export default ImageDots
