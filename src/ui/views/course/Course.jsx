import React from 'react'
import PropTypes from 'prop-types'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Menu from '../../components/menu/Menu'
import CourseIntro from '../../components/sections/course/CourseIntro'

const Course = ({ isBlack, isFluor, isLock, courses, dates, name }) => {
  return (
    <MainWrapper isBlack={isBlack} isFluor={isFluor} isLock={isLock}>
      <Menu isBlack={isBlack} courses={courses} />
      <CourseIntro dates={dates} name={name} />
    </MainWrapper>
  )
}

Course.propTypes = {}

export default Course
