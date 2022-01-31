import React from 'react'
import PropTypes from 'prop-types'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Menu from '../../components/menu/Menu'
import CourseIntro from '../../components/sections/course/CourseIntro'
import CourseTitle from '../../components/sections/course/CourseTitle'
import CourseSection from '../../components/sections/course/CourseSection'
import CourseSectionEmpty from '../../components/sections/course/CourseSectionEmpty'
import CourseObjectives from '../../components/sections/course/CourseObjectives'
import useTranslations from '../../../hooks/useTranslations'

const Course = ({ isBlack, isFluor, isLock, courses, dates, name }) => {
  const t = useTranslations()
  return (
    <MainWrapper isBlack={isBlack} isFluor={isFluor} isLock={isLock}>
      {/* <Menu isBlack={isBlack} courses={courses} /> */}
      <CourseIntro dates={dates} name={name} />
      <section className="courseSections">
        <CourseTitle title={t('course:index-title')} />
        <CourseSection
          number="01"
          text="Introducción y recursos. String templates. Desestructuración.
Declaración de variables. (2H)"
          title={t('course:fundamentals')}
        />
        <CourseSectionEmpty />
        <CourseSection
          number="02"
          text="Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)"
          title={t('course:functional-programming')}
        />
        <CourseSectionEmpty />
        <CourseSection
          number="03"
          text="Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)"
          title={t('course:object-oriented-programming')}
        />
        <CourseSectionEmpty />
        <CourseSection
          number="04"
          text="Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)"
          title={t('course:functional-programming')}
        />
        <CourseSectionEmpty />
        <CourseSection
          number="05"
          text="Introducción. Callbacks. Iteración asíncrona. Sincronización. Eventos y Observables. Combinación de eventos. (4H)"
          title={t('course:asynchronous-programming')}
        />
        <CourseSectionEmpty />
        <CourseSection
          number="06"
          text="Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)"
          title={t('course:promises')}
        />
        <CourseSectionEmpty />

        <CourseSection
          number="07"
          text="Further study. Lecturas recomendadas. Recursos extra. (1H)"
          title={t('courses:closing')}
        />
        <CourseTitle title={t('course:objectives-title')} />
        <CourseObjectives
          learn={t('course:learn')}
          text="Congue fermentum fermentum justo, phasellus. Aliquam sapien scelerisque porttitor quam congue nibh. "
          objectives={t('course:objectives')}
        />
      </section>
    </MainWrapper>
  )
}

Course.propTypes = {}

export default Course