import React from 'react'
import Input from '../Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Introduce tu email',
      control: {
        type: 'text'
      },
    },
    value: {
      name: 'placeholder',
      defaultValue: '',
      control: {
        type: 'text'
      },
    },
  }
}

export const input = ({ ...args }) => (
  <Input
    {...args}
    handleBlur={() => { }}
    handleChange={() => { }}
    name="email"
    type="email"
  />
)
export const inputWithSubmit = ({ ...args }) => (
  <Input
    {...args}
    handleBlur={() => { }}
    handleChange={() => { }}
    handleSubmit={() => { }}
    name="email"
    type="email"
  />
)
