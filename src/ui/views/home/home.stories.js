import React, { useState } from 'react'
import Home from './Home'
import useTranslations from '../../../hooks/useTranslations'
import useViewportHeight from '../../../hooks/useViewportHeight'
import useDetectMobile from '../../../hooks/useDetectMobile'
import useBackgroundChange from '../../../hooks/useBackgroundChange'
import useScrambleText from '../../../hooks/useScrambleText'
import CompanyLogo from '../../../assets/images/demo-company.svg'

export default {
  title: 'Views/Home',
  component: Home,
}

export const home = () => {
  const t = useTranslations()
  const [isLock, setIsLock] = useState(false)
  const [isBlack, setIsBlack] = useState(false)
  const [isFluor, setIsFluor] = useState(false)
  useViewportHeight()
  useDetectMobile()
  useBackgroundChange(setIsBlack, setIsFluor)
  useScrambleText()

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

  const fakeLogosArray = new Array(15).fill(null)
  const logos = fakeLogosArray.map(() => <CompanyLogo viewBox="0 0 125 45" />)

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
    <Home
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
