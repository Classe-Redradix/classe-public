import React, { useLayoutEffect, useRef, useState } from 'react'
import { Node } from 'gl-react'
import { Surface } from 'gl-react-dom'
import shaders from '../../../assets/shaders/dots'
import demoImage from '../../../assets/images/demo.png'

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
