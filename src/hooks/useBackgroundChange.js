import { useEffect } from 'react'

const useBackgroundChange = (setIsBlack) => {
  const changeColor = () => {
    const sectionsBlack = document.querySelectorAll('.sectionWrapper.is-blackChanger')
    // const sectionsFluor = document.querySelectorAll('.sectionWrapper.is-fluor')
    const reference = window.innerHeight / 2

    sectionsBlack.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom

      reference > top && reference < bottom
        ? setIsBlack(true)
        : setIsBlack(false)
    })
  }

  useEffect(() => {
    const mainWrapper = document.querySelector('.mainWrapper')
    mainWrapper.addEventListener('scroll', () => changeColor())
    return mainWrapper.removeEventListener('scroll', () => changeColor())
  }, [])
}

export default useBackgroundChange
