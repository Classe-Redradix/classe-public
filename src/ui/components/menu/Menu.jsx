import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import { useRouter } from 'next/router'

const Menu = ({
  isBlack,
  isFluor,
  courses,
  contactFormParams,
  defaultCourse = null,
  defaultIsContactOpen = false,
  defaultAreCoursesOpen = false,
  defaultIsCourseOpen = false,
  actionText = 'menu:close',
  handleText,
}) => {
  const router = useRouter()
  const size = useWindowSize()
  const [isContactOpen, setIsContactOpen] = useState(defaultIsContactOpen)
  const [areCoursesOpen, setAreCoursesOpen] = useState(defaultAreCoursesOpen)
  const [isCourseOpen, setIsCourseOpen] = useState(defaultIsCourseOpen)
  const [course, setCourse] = useState(defaultCourse)

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

  const handleCourseOpen = course => {
    setAreCoursesOpen(false)
    setIsContactOpen(false)
    setIsCourseOpen(true)
  }

  const handleClose = () => {
    setIsContactOpen(false)
    setAreCoursesOpen(false)
    setIsCourseOpen(false)
    router.replace('/')
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
        contactFormParams={contactFormParams}
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
