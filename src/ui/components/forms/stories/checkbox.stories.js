import React from 'react'
import Checkbox from '../Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Acepto términos y condiciones',
      control: {
        type: 'text'
      },
    },
    hasMessage: {
      name: 'hasMessage',
      defaultValue: true,
      control: {
        type: 'boolean'
      },
    },
    isChecked: {
      name: 'isChecked',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
    },
  }
}

export const checkbox = ({ ...args }) => (
  <Checkbox
    handleChange={() => { }}
    name=""
    value=""
    {...args}
  />
)
