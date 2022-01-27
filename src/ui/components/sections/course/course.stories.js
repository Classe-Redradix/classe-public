import React from 'react'
import CourseIntro from './CourseIntro'
import CourseTitle from './CourseTitle'
import CourseSection from './CourseSection'
import CourseSectionEmpty from './CourseSectionEmpty'

export default {
  title: 'Modules/Course',
  argTypes: {
    name: {
      name: 'name',
      defaultValue: 'JS PRO',
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'name',
      defaultValue: 'Objetivos',
      control: {
        type: 'text',
      },
    },
    number: {
      name: 'name',
      defaultValue: '01',
      control: {
        type: 'number',
      },
    },
    width: {
      name: 'width',
      defaultValue: 1,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
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

export const courseIntro = ({ ...args }) => (
  <CourseIntro isBlack dates={dates} {...args} />
)
courseIntro.parameters = {
  options: {
    showPanel: true,
  },
}

export const courseTitleIndex = ({ ...args }) => (
  <CourseTitle isBlack title="Índice" />
)
export const courseTitleObjectives = ({ ...args }) => (
  <CourseTitle isBlack title="Objetivos" />
)

export const courseSection = ({ ...args }) => (
  <CourseSection
    {...args}
    text="Introducción y recursos. String templates. Desestructuración.
Declaración de variables. (2H)"
  />
)

export const courseSectionEmpty = ({ ...args }) => (
  <CourseSectionEmpty {...args} />
)

courseSectionEmpty.parameters = {
  options: {
    showPanel: true,
  },
}
