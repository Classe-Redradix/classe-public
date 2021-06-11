import React, { useEffect, useState, useRef } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu = () => {
  const size = useWindowSize()
  const menuRef = useRef(null)
  const [isBlack, setIsBlack] = useState(false)
  const [isFluor, setIsFluor] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

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

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  useEffect(() => {
    const mainWrapper = document.querySelector('.mainWrapper')
    mainWrapper.addEventListener('scroll', () => changeColor())
    return mainWrapper.removeEventListener('scroll', () => changeColor())
  }, [])

  return (
    <>
      <MenuLayer courses={[{}, {}]} isOpen={isOpen} handleClose={handleClose} />
      {size.width >= 768 ? (
        <MenuDesktop
          isBlack={isBlack}
          isFluor={isFluor}
          handleOpen={handleOpen}
          courses={7}
          ref={menuRef}
        />
      ) : (
        <MenuMobile
          isBlack={isBlack}
          isFluor={isFluor}
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          ref={menuRef}
        />
      )}
    </>
  )
}

export default Menu
