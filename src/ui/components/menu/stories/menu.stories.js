import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import Menu from '../Menu'
import COURSES from '../../../../../pages/data/courses'

export default {
  title: 'Layout/Menu',
  component: Menu,
}

export const menu = ({ ...args }) => (
  <MainWrapper>
    <Menu courses={COURSES} {...args} />
  </MainWrapper>
)
