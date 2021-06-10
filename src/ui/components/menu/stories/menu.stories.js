import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import Menu from '../Menu'

export default {
  title: 'Components/Menu',
  component: Menu,
}

export const menu = ({ ...args }) => (
  <MainWrapper>
    <Menu {...args} />
  </MainWrapper>
)
