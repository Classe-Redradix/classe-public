import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu = ({
  isBlack,
  isFluor,
  courses,
  defaultIsContactOpen = false,
  defaultAreCoursesOpen = false,
  defaultIsCourseOpen = false,
  actionText = 'menu:close',
  handleText,
}) => {
  const size = useWindowSize()
  const [isContactOpen, setIsContactOpen] = useState(defaultIsContactOpen)
  const [areCoursesOpen, setAreCoursesOpen] = useState(defaultAreCoursesOpen)
  const [isCourseOpen, setIsCourseOpen] = useState(defaultIsCourseOpen)
  const [course, setCourse] = useState(null)

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

  const openCourse = course => {
    setAreCoursesOpen(false)
    setIsCourseOpen(true)
    setCourse(course)
  }

  return (
    <>
      <MenuLayer
        actionText={actionText}
        courses={courses}
        handleContactOpen={handleContactOpen}
        isContactOpen={isContactOpen}
        isCourseOpen={isCourseOpen}
        handleOpenCourse={openCourse}
        course={course}
        areCoursesOpen={areCoursesOpen}
        handleClose={!!handleText ? handleText : handleClose}
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
