import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu = ({ type, isBlack, isFluor, courses, onToggle }) => {
  const size = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    onToggle(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    onToggle(false)
  }

  return (
    <>
      <MenuLayer
        type={type}
        courses={courses}
        isOpen={isOpen}
        handleClose={handleClose}
      />
      {size.width >= 768 ? (
        <MenuDesktop
          isBlack={isBlack}
          isFluor={isFluor}
          handleOpen={handleOpen}
          courses={courses.length}
        />
      ) : (
        <MenuMobile
          isBlack={isBlack}
          isFluor={isFluor}
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </>
  )
}

Menu.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  type: PropTypes.string,
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
}

export default Menu
