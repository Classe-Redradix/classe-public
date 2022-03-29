import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CourseIntro from '../../components/sections/course/CourseIntro'
import CourseTitle from '../../components/sections/course/CourseTitle'
import CourseSection from '../../components/sections/course/CourseSection'
import CourseSectionEmpty from '../../components/sections/course/CourseSectionEmpty'
import CourseObjectives from '../../components/sections/course/CourseObjectives'
import CourseInfo from '../../components/sections/course/CourseInfo'
import CourseContact from '../../components/sections/course/CourseContact'
import { COURSES } from '../../../data'
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

const MenuCourse = ({ course, openContact, isCourseOpen }) => {
  const formatMessage = useTranslations()
  useScrambleText()
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef(null)

  // HACK: here we have two posibilities:
  //  1. The user is navigating to the course directly with app links (no problem)
  //  2. The user is navigating to the course using the history (forwards or
  //     backwards).
  // If it's the second one, the `course` prop will be `null`, because the course
  // wouldn't be prefetched. To fix this, we have to check if the the course
  // exists, and if it not, find it using `window.location.href`. We have to
  // split the url by `/courses/` so the second element be the course id.
  let menuCourse
  if (course === null) {
    // TODO: `courses` shouldn't be a literal, it must be dynamic using translations
    const [_, courseId] = window.location.href.split('/courses/')

    menuCourse = COURSES.find(course => course.id === courseId)
  } else {
    menuCourse = Object.assign({}, course)
  }

  const { information } = menuCourse

  useEffect(() => {
    let t = null
    if (container.current) {
      const t = gsap.to(container.current, {
        x: () =>
          -(
            container.current.scrollWidth - document.documentElement.clientWidth
          ) + 'px',
        ease: 'none',
        scrollTrigger: {
          // id: `fake`,
          scroller: '.menuLayer-content',
          trigger: container.current,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => '+=' + container.current.offsetWidth,
        },
      })
    }

    // return () => {
    //   const titleElTrigger = ScrollTrigger.getById('fake')

    //   if (titleElTrigger) {
    //     titleElTrigger.kill()
    //   }
    // }
  }, [isCourseOpen])

  return (
    <div>
      <div className="courseSections" ref={container}>
        <CourseIntro
          dates={dates}
          name={information.title}
          image={information.image}
          openContact={openContact}
          course={menuCourse}
        />
        <CourseTitle title={formatMessage('course:index-title')} />
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
        <CourseTitle title={formatMessage('course:objectives-title')} />
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
        <CourseTitle title={formatMessage('footer:contact')} />
        <CourseContact openContact={openContact} />
      </div>
    </div>
  )
}

export default MenuCourse
