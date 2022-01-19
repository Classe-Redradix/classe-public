import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import Header from '../Header'

export default {
  title: 'Layout/Header',
  component: Header,
  argTypes: {
    isClose: {
      name: 'isClose',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    number: {
      name: 'number',
      defaultValue: 1,
      control: {
        type: 'number',
      },
    },
    title: {
      name: 'title',
      defaultValue: 'Manifiesto',
      control: {
        type: 'text',
      },
    },
  },
}

export const header = ({ ...args }) => (
  <MainWrapper>
    <Header {...args} />
  </MainWrapper>
)

header.parameters = {
  options: {
    showPanel: true,
  },
}
