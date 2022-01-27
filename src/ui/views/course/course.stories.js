import React from 'react'
import Course from './Course'
import useScrambleText from '../../../hooks/useScrambleText'

export default {
  title: 'Views/Course',
  component: Course,
}

const courses = [
  {
    title: 'Js pro',
    href: '/',
  },
  {
    title: 'React',
    href: '/',
  },
  {
    title: 'Redux',
    href: '/',
  },
  {
    title: 'Data',
    href: '/',
  },
]

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
      courses={courses}
      dates={dates}
      name="JS PRO"
      title="objetivos"
    />
  )
}
