import React, { useState } from 'react'
import Footer from '../Footer'

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {
    isBlack: {
      name: 'isBlack',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
}

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

export const footer = ({ ...args }) => {
  return <Footer courses={courses} {...args} />
}

footer.parameters = {
  options: {
    showPanel: true,
  },
}
