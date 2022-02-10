import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import useTranslations from '../../../hooks/useTranslations'
import TabIcon from './../../../assets/icons/TabIcon'

const CoursesList = ({ courses }) => {
  const router = useRouter()
  const t = useTranslations()

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className="coursesList">
      <p className="coursesList-title h2">
        [{courses.length < 10 ? `0${courses.length}` : courses.length}]{' '}
        {t('menu:courses')}
      </p>
      <ol className="coursesList-list">
        {courses.map((course, index) => (
          <li key={course.title}>
            <a
              className="coursesList-link h1"
              href={course.href}
              onClick={handleClick}
            >
              <span className="coursesList-linkNumber">
                {index < 10 ? `0${index + 1}` : index + 1}
              </span>
              <span className="coursesList-linkTextWrapper">
                <TabIcon color="red" className="icon" />
                <span className="coursesList-linkText">{course.title}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default CoursesList
