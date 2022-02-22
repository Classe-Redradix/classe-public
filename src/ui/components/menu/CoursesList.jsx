import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import TabIcon from './../../../assets/icons/TabIcon'
import { CoursePropType } from '../sharedProptypes'

const CoursesList = ({ courses, openCourse }) => {
  const t = useTranslations()

  const handleCourseClick = (e, course) => {
    e.preventDefault()
    openCourse(course)
  }

  return (
    <div className="coursesList">
      <p className="coursesList-title h2">
        [{courses.length < 10 ? `0${courses.length}` : courses.length}]{' '}
        {t('menu:courses')}
      </p>
      <ol className="coursesList-list">
        {courses.map((course, index) => (
          <li key={course.information.title}>
            <a
              className="coursesList-link h1"
              href={course.href}
              onClick={e => handleCourseClick(e, course)}
            >
              <span className="coursesList-linkNumber">
                {index < 10 ? `0${index + 1}` : index + 1}
              </span>
              <span className="coursesList-linkTextWrapper">
                <TabIcon color="red" className="icon" />
                <span className="coursesList-linkText">
                  {course.information.title}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(CoursePropType.isRequired).isRequired,
}

export default CoursesList
