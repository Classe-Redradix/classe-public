import React, { useEffect, useState, useRef } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu = () => {
  const size = useWindowSize()
  const menuRef = useRef(null)
  const [isBlack, setIsBlack] = useState(false)
  const [isFluor, setIsFluor] = useState(false)

  const changeColor = () => {
    const sectionsBlack = document.querySelectorAll('.sectionWrapper.is-black')
    const sectionsFluor = document.querySelectorAll('.sectionWrapper.is-fluor')
    const reference = menuRef.current.getBoundingClientRect().bottom

    sectionsBlack.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom

      reference > top && reference < bottom
        ? setIsBlack(true)
        : setIsBlack(false)
    })

    sectionsFluor.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom

      reference > top && reference < bottom
        ? setIsFluor(true)
        : setIsFluor(false)
    })
  }

  useEffect(() => {
    const mainWrapper = document.querySelector('.mainWrapper')
    mainWrapper.addEventListener('scroll', () => changeColor())
    return mainWrapper.removeEventListener('scroll', () => changeColor())
  }, [])

  return size.width >= 768 ? (
    <MenuDesktop
      isBlack={isBlack}
      isFluor={isFluor}
      courses={7}
      ref={menuRef}
    />
  ) : (
    <MenuMobile isBlack={isBlack} isFluor={isFluor} ref={menuRef} />
  )
}

export default Menu
