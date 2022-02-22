import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import TabIcon from './../../../assets/icons/TabIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CoursePropType } from '../sharedProptypes'

const CoursesList = ({ courses, handleOpenCourse }) => {
  const t = useTranslations()
  const router = useRouter()

  const handleCourseClick = (e, course) => {
    handleOpenCourse(course)
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
            {/* HACK: we use `router?.pathname ?? '/'` because of Storybook, so
            we don't have to install any additional dependencies to add the
            next router to Storybook */}
            <Link href={router?.pathname ?? '/'} as={`/courses/${course.id}`}>
              <a
                className="coursesList-link h1"
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
            </Link>
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
