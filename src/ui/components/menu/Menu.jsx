import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import { useRouter } from 'next/router'
import useMenu from './../../../app/useMenu'
import { CoursePropType } from '../sharedProptypes'

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
  openContact,
  openCourses,
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
        openContact={openContact}
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
          openCourses={openCourses}
          openContact={openContact}
          courses={courses.length}
        />
      ) : (
        <MenuMobile
          isBlack={isBlack}
          isFluor={isFluor}
          isContactOpen={isContactOpen}
          areCoursesOpen={areCoursesOpen}
          openCourses={openCourses}
          openContact={openContact}
          handleClose={handleClose}
        />
      )}
    </>
  )
}

Menu.propTypes = {
  courses: PropTypes.arrayOf(CoursePropType.isRequired).isRequired,
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
}

export default Menu
