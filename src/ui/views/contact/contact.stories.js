import React from 'react'
import Contact from './Contact'
import useScrambleText from '../../../hooks/useScrambleText'

export default {
  title: 'Views/Contact',
  component: Contact,
}

export const contact = () => {
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

  return <Contact isBlack courses={courses} />
}
