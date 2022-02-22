import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import { useRouter } from 'next/router'
import useMenu from './../../../app/useMenu'

const Menu = ({
  isBlack,
  isFluor,
  courses,
  contactFormParams,
  actionText = 'menu:close',
  handleText,
  areCoursesOpen = false,
  course = null,
  handleClose,
  handleContactOpen,
  handleCoursesOpen,
  isContactOpen = false,
  isCourseOpen = false,
  openCourse,
}) => {
  const size = useWindowSize()

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
