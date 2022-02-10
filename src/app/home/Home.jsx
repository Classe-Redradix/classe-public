import { useState } from 'react'

import CompanyLogo from '/public/images/demo-company.svg'
import COURSES from './../../../pages/data/courses'

import {
  useViewportHeight,
  useDetectMobile,
  useBackgroundChange,
  useScrambleText,
} from './../../hooks'

import HomeUI from '../../ui/views/home/Home'

const Home = () => {
  const [isLock, setIsLock] = useState(false)
  const [isBlack, setIsBlack] = useState(false)
  const [isFluor, setIsFluor] = useState(false)

  useViewportHeight()
  useDetectMobile()
  useBackgroundChange(setIsBlack, setIsFluor)
  useScrambleText()

  const courses = COURSES.map(course => ({
    title: course.information.title,
    href: `/courses/${course.id}`,
  }))

  const fakeLogosArray = new Array(15).fill(null)
  const logos = fakeLogosArray.map(() => <img src={CompanyLogo} />)
  const fakeFaqsArray = new Array(7).fill(null)
  const faqsList = fakeFaqsArray.map(() => ({
    title: '¿Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nulla sed libero dui. Ac molestie diam egestas magnis auctor vitae. Magna scelerisque blandit sed vulputate accumsan pulvinar enim scelerisque. Malesuada.',
  }))
  const dates = [
    {
      day: '01',
      month: 'Enero',
      courses: [
        {
          title: 'Js Pro',
          start: '16',
          finish: '27',
          to: '/',
        },
        {
          title: 'Data',
          start: '16',
          finish: '27',
          to: '/',
        },
      ],
    },
    {
      day: '19',
      month: 'Agosto',
      courses: [
        {
          title: 'Redux',
          start: '16',
          finish: '27',
          to: '/',
        },
      ],
    },
  ]
  return (
    <HomeUI
      isBlack={isBlack}
      isFluor={isFluor}
      isLock={isLock}
      courses={courses}
      dates={dates}
      logos={logos}
      faqsList={faqsList}
    />
  )
}

export default Home
