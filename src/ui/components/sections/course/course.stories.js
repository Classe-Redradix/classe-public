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
        max: 342,
      },
    },
  },
}

const course = {
  id: 'js-pro',
  isFeatured: false,
  // isPublic: true,
  href: '/courses/js-pro',
  information: {
    title: 'JS PRO',
    start: '1',
    finish: '9',
    description: "This is the best JavaScript course you'll ever find",
    price: 900,
    hours: 20,
    places: 30,
    enrolledStudents: 13,
    successPercentage: 95,
  },
  index: [
    {
      number: '01',
      name: 'Fundamentos',
      description:
        'Introducción y recursos. String templates. Desestructuración. Declaración de variables. (2H)',
    },
    {
      number: '02',
      name: 'Programación funcional',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)',
    },
    {
      number: '03',
      name: 'Programación orientada a objetos',
      description:
        'Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)',
    },
    {
      number: '04',
      name: 'Programación funcional II',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)',
    },
  ],
  objetives: [
    'Objetive 1',
    'Objetive 2',
    'Objetive 3',
    'Objetive 4',
    'Objetive N',
  ],
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
  <CourseIntro isBlack dates={dates} {...args} course={course} />
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
