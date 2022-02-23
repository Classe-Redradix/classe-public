import React, { useState } from 'react'
import Footer from '../Footer'
import { COURSES } from '../../../../data'

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

export const footer = ({ ...args }) => {
  return (
    <Footer
      contactFormParams={{
        email: '',
        onEmailChange: () => {},
        userType: '',
        onUserTypeChange: () => {},
      }}
      courses={COURSES}
      {...args}
    />
  )
}

footer.parameters = {
  options: {
    showPanel: true,
  },
}
