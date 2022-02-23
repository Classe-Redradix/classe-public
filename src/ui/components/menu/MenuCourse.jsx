import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CourseIntro from '../../components/sections/course/CourseIntro'
import CourseTitle from '../../components/sections/course/CourseTitle'
import CourseSection from '../../components/sections/course/CourseSection'
import CourseSectionEmpty from '../../components/sections/course/CourseSectionEmpty'
import CourseObjectives from '../../components/sections/course/CourseObjectives'
import CourseInfo from '../../components/sections/course/CourseInfo'
import CourseContact from '../../components/sections/course/CourseContact'
import useScrambleText from '../../../hooks/useScrambleText'
import useTranslations from '../../../hooks/useTranslations'

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

const MenuCourse = ({ course, openContact }) => {
  // gsap.registerPlugin(ScrollTrigger)
  const t = useTranslations()
  useScrambleText()

  // useEffect(() => {
  //   const container = document.querySelectorAll('.courseSections')
  //   gsap.to(container, {
  //     x: () =>
  //       -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: container,
  //       invalidateOnRefresh: true,
  //       pin: true,
  //       scrub: 1,
  //       end: () => '+=' + container.offsetWidth,
  //     },
  //   })
  // }, [])

  const { information, index, objetives } = course

  return (
    <section className="courseSections">
      <CourseIntro
        dates={dates}
        name={information.title}
        openContact={openContact}
        course={course}
      />
      <CourseTitle title={t('course:index-title')} />
      <CourseSection
        number="01"
        text="Introducción y recursos. String templates. Desestructuración.
Declaración de variables. (2H)"
        title="course:fundamentals"
      />
      <CourseSectionEmpty />
      <CourseSection
        number="02"
        text="Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)"
        title="course:functional-programming"
      />
      <CourseSectionEmpty />
      <CourseSection
        number="03"
        text="Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)"
        title="course:object-oriented-programming"
      />
      <CourseSectionEmpty />
      <CourseSection
        number="04"
        text="Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)"
        title="course:functional-programming"
      />
      <CourseSectionEmpty />
      <CourseSection
        number="05"
        text="Introducción. Callbacks. Iteración asíncrona. Sincronización. Eventos y Observables. Combinación de eventos. (4H)"
        title="course:asynchronous-programming"
      />
      <CourseSectionEmpty />
      <CourseSection
        number="06"
        text="Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)"
        title="course:promises"
      />
      <CourseSectionEmpty />

      <CourseSection
        number="07"
        text="Further study. Lecturas recomendadas. Recursos extra. (1H)"
        title="courses:closing"
      />
      <CourseTitle title={t('course:objectives-title')} />
      <CourseObjectives
        learn="course:learn"
        text="Congue fermentum fermentum justo, phasellus. Aliquam sapien scelerisque porttitor quam congue nibh. "
        objectives="course:objectives"
      />
      <CourseInfo
        price={information.price}
        hours={information.hours}
        places={information.places}
        students={information.enrolledStudents}
        successPercentage={information.successPercentage}
      />
      <CourseTitle title={t('footer:contact')} />
      <CourseContact />
    </section>
  )
}

MenuCourse.propTypes = {}

export default MenuCourse
