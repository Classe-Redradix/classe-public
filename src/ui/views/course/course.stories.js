import React from 'react'
import Course from './Course'
import useScrambleText from '../../../hooks/useScrambleText'
import COURSES from '../../../../pages/data/courses'

export default {
  title: 'Views/Course',
  component: Course,
}

const dates = [
  {
    day: '01',
    month: 'Enero',
    courses: [
      {
        title: 'Próxima convocatoria',
        start: '16.01.21',
        finish: '27.02.21',
        to: '/',
      },
    ],
  },
]

export const course = () => {
  useScrambleText()

  return (
    <Course
      isBlack
      courses={COURSES}
      dates={dates}
      name="JS PRO"
      title="objetivos"
      price={900}
      hours={20}
      places={30}
      students={120}
      successPercentage={94}
    />
  )
}
