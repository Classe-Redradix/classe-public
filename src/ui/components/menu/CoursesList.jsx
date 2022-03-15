import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import TabIcon from './../../../assets/icons/TabIcon'
import { CoursePropType } from '../../sharedProptypes'

const CoursesList = ({ courses, openCourse }) => {
  const t = useTranslations()

  const handleCourseClick = (e, course) => {
    e.preventDefault()
    openCourse(course)
  }

  return (
    <div className="coursesList">
      <h1 className="coursesList-title h2">
        <span aria-hidden="true">
          [{courses.length < 10 ? `0${courses.length}` : courses.length}]
        </span>{' '}
        {t('menu:courses')}
      </h1>
      <ol className="coursesList-list">
        {courses.map((course, index) => (
          <li key={course.information.title}>
            <h2>
              <a
                className="coursesList-link h1"
                href={course.href}
                onClick={e => handleCourseClick(e, course)}
              >
                <span className="coursesList-linkNumber" aria-hidden="true">
                  {index < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="coursesList-linkTextWrapper">
                  <TabIcon color="red" className="icon" />
                  <span className="coursesList-linkText">
                    {course.information.title}
                  </span>
                </span>
              </a>
            </h2>
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
