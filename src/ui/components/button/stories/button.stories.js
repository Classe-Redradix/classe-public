import React from 'react'
import Button from '../Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    isFull: {
      name: 'isFull',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    isLink: {
      name: 'isLink',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    isNegative: {
      name: 'isNegative',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    isFluor: {
      name: 'isFluor',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    text: {
      name: 'text',
      defaultValue: 'Cancelar',
      control: {
        type: 'text',
      },
    },
  },
}

export const button = ({ ...args }) => <Button {...args} />

button.parameters = {
  options: {
    showPanel: true,
  },
}
