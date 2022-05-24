import React, { useEffect, useRef } from 'react'

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
import useHorizontalScroll from '../../../hooks/useHorizontalScroll'

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

  const { information, indexItems, objectives, href } = menuCourse

  const container = useHorizontalScroll()

  return (
    <div className="courseSections" ref={container}>
      <CourseIntro
        dates={dates}
        name={information.title}
        image={information.image}
        openContact={openContact}
        course={menuCourse}
        description={information.description}
      />
      <CourseTitle title={formatMessage('course:index-title')} />
      {indexItems.map((indexItem, index) => (
        <>
          <CourseSection
            key={index}
            number={indexItem.number}
            text={indexItem.description}
            title={indexItem.name}
          />
          <CourseSectionEmpty key={`0${index + 1}`} />
        </>
      ))}

      <CourseTitle title={formatMessage('course:objectives-title')} />
      <CourseObjectives
        learn={objectives.learn}
        text={objectives.text}
        objectives={objectives.objectives}
        objectivesText={objectives.objectivesText}
      />
      <CourseInfo
        price={information.price}
        hours={information.hours}
        places={information.places}
        practical={information.practical}
      />
      <CourseTitle title={formatMessage('footer:contact')} />
      <CourseContact openContact={openContact} />
    </div>
  )
}

export default MenuCourse
