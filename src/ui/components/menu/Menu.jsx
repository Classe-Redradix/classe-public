import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuLayer from './MenuLayer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import { MEDIA_QUERIES } from '../../../data/'
import { useRouter } from 'next/router'
import {
  CoursePropType,
  ContactFormParamsPropType,
} from '../../sharedProptypes'

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
        openContact={_ => {
          // NOTE: we don't need to check if the course exists because if the
          // user clicks on this button, it means that the modal course is
          // open, which means that there'll always be a course selected
          // at this point
          openContact(_, course.id)
        }}
        isContactOpen={isContactOpen}
        isCourseOpen={isCourseOpen}
        openCourse={openCourse}
        course={course}
        areCoursesOpen={areCoursesOpen}
        handleClose={!!handleText ? handleText : handleClose}
      />
      {size.width >= MEDIA_QUERIES.desktop ? (
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
  course: CoursePropType,
  courses: PropTypes.arrayOf(CoursePropType.isRequired).isRequired,
  contactFormParams: ContactFormParamsPropType,
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  areCoursesOpen: PropTypes.bool,
  isContactOpen: PropTypes.bool,
  isCourseOpen: PropTypes.bool,
  actionText: PropTypes.string,
  handleText: PropTypes.func,
  handleClose: PropTypes.func,
  openContact: PropTypes.func,
  openCourses: PropTypes.func,
  openCourse: PropTypes.func,
}

export default Menu
