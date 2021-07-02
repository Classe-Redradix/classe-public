import { useEffect } from 'react'

const useBackgroundChange = (setIsBlack, setIsFluor) => {
  const changeColor = () => {
    const sectionsBlack = document.querySelectorAll('.sectionWrapper.is-blackChanger')
    const sectionsFluor = document.querySelectorAll('.sectionWrapper.is-fluorChanger')
    const reference = window.innerHeight / 2

    sectionsBlack.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom
      const toggle = () => reference > top && reference < bottom
        ? setIsBlack(true)
        : setIsBlack(false)

      if (top < window.innerHeight && top > 0) {
        toggle()
      } else if (bottom < window.innerHeight && bottom > 0) {
        toggle()
      } else return false
    })

    sectionsFluor.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom
      const toggle = () => reference > top && reference < bottom
        ? setIsFluor(true)
        : setIsFluor(false)

      if (top < window.innerHeight && top > 0) {
        toggle()
      } else if (bottom < window.innerHeight && bottom > 0) {
        toggle()
      } else return false
    })
  }

  useEffect(() => {
    const mainWrapper = document.querySelector('.mainWrapper')
    mainWrapper.addEventListener('scroll', () => changeColor())
    return mainWrapper.removeEventListener('scroll', () => changeColor())
  }, [])
}

export default useBackgroundChange
