import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu = ({ isBlack, isFluor, courses }) => {
  const size = useWindowSize()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [areCoursesOpen, setAreCoursesOpen] = useState(false)
  const [isCourseOpen, setIsCourseOpen] = useState(false)

  const handleCoursesOpen = () => {
    setIsContactOpen(false)
    setIsCourseOpen(false)
    setAreCoursesOpen(true)
  }

  const handleContactOpen = () => {
    setAreCoursesOpen(false)
    setIsCourseOpen(false)
    setIsContactOpen(true)
  }

  const handleCourseOpen = () => {
    setAreCoursesOpen(false)
    setIsContactOpen(false)
    setIsCourseOpen(true)
  }

  const handleClose = () => {
    setIsContactOpen(false)
    setAreCoursesOpen(false)
    setIsCourseOpen(false)
  }

  return (
    <>
      <MenuLayer
        courses={courses}
        handleContactOpen={handleContactOpen}
        isContactOpen={isContactOpen}
        isCourseOpen={isCourseOpen}
        areCoursesOpen={areCoursesOpen}
        handleClose={handleClose}
      />
      {size.width >= 768 ? (
        <MenuDesktop
          isBlack={isBlack}
          isFluor={isFluor}
          handleCoursesOpen={handleCoursesOpen}
          handleContactOpen={handleContactOpen}
          handleCourseOpen={handleCourseOpen}
          courses={courses.length}
        />
      ) : (
        <MenuMobile
          isBlack={isBlack}
          isFluor={isFluor}
          isContactOpen={isContactOpen}
          areCoursesOpen={areCoursesOpen}
          handleCoursesOpen={handleCoursesOpen}
          handleContactOpen={handleContactOpen}
          handleCourseOpen={handleCourseOpen}
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
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
}

export default Menu
