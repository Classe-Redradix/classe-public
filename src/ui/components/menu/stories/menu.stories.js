import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import Menu from '../Menu'

export default {
  title: 'Layout/Menu',
  component: Menu,
}

export const menu = ({ ...args }) => (
  <MainWrapper>
    <Menu
      courses={[
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
      ]}
      {...args}
    />
  </MainWrapper>
)
