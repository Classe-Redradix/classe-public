import React, { useEffect } from 'react'
import gsap from 'gsap'

const useScrambleText = () => (
  useEffect(() => {
    const texts = gsap.utils.toArray('.h3')
    gsap.to(texts, {
      duration: 4,
      scrambleText: {
        text: "or use only numbers,",
        chars: "0123456789"
      }
    })
  }, [])
)

export default useScrambleText
