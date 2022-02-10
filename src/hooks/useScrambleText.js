import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useScrambleText = () => {
  gsap.registerPlugin(ScrambleTextPlugin)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const textWrappers = document.querySelectorAll('.scrambleTextWrapper')
    textWrappers.forEach(wrapper => {
      const text = wrapper.querySelector('.scrambleText')
      const cloned = text.cloneNode(true)
      cloned.classList.add('is-cloned')
      wrapper.appendChild(cloned)

      const lines = cloned.querySelectorAll('.line')
      lines.forEach(line =>
        gsap.to(line, {
          duration: 1.2,
          scrambleText: {
            text: line.innerHTML,
            chars: '!@#$%&/=*',
          },
          scrollTrigger: {
            scroller: '.mainWrapper',
            trigger: wrapper,
            start: 'top 75%',
          },
        }),
      )

      gsap.to(lines, {
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          scroller: '.mainWrapper',
          trigger: wrapper,
          start: 'top 75%',
        },
      })
    })
  }, [])
}

export default useScrambleText
