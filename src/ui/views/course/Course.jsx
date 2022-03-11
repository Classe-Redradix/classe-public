import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MainWrapper from '../../components/wrappers/MainWrapper'
import CourseIntro from '../../components/sections/course/CourseIntro'
import CourseTitle from '../../components/sections/course/CourseTitle'
import CourseSection from '../../components/sections/course/CourseSection'
import CourseSectionEmpty from '../../components/sections/course/CourseSectionEmpty'
import CourseObjectives from '../../components/sections/course/CourseObjectives'
import CourseInfo from '../../components/sections/course/CourseInfo'
import CourseContact from '../../components/sections/course/CourseContact'
import useTranslations from '../../../hooks/useTranslations'
import { CoursePropType, DatesPropType } from './../../sharedProptypes'
import { COURSES } from '../../../data'

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

const Course = ({ course = COURSES[0], isBlack, isFluor, isLock }) => {
  const t = useTranslations()
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef(null)
  const { information } = course

  useEffect(() => {
    if (container.current) {
      gsap.to(container.current, {
        x: () =>
          -(
            container.current.scrollWidth - document.documentElement.clientWidth
          ) + 'px',
        ease: 'none',
        scrollTrigger: {
          scroller: '.mainWrapper',
          trigger: container.current,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => '+=' + container.current.offsetWidth,
        },
      })
    }
  }, [container.current])

  return (
    <MainWrapper isBlack={isBlack} isFluor={isFluor} isLock={isLock}>
      <section className="courseSections" ref={container}>
        <CourseIntro
          dates={dates}
          name={information.title}
          // openContact={openContact}
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
    </MainWrapper>
  )
}

Course.propTypes = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  isLock: PropTypes.bool,
  courses: PropTypes.arrayOf(CoursePropType),
  dates: DatesPropType,
  name: PropTypes.string,
  price: PropTypes.number,
  hours: PropTypes.number,
  places: PropTypes.number,
  students: PropTypes.number,
  successPercentage: PropTypes.number,
}

export default Course
