import React from 'react'
import Facts from '../../sections/Facts'

export default {
  title: 'Modules/Facts',
  component: Facts,
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

export const facts = ({ ...args }) => <Facts {...args} />

facts.parameters = {
  options: {
    showPanel: true,
  },
}
