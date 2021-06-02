import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import Row from '../Row'
import Cell from '../../cell/Cell'

export default {
  title: 'Components/Row',
  component: Row,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'full',
      control: {
        type: 'select',
        options: ['full', 'half', 'third', 'quarter'],
      },
    },
  }
}

export const row = ({ ...args }) => (
  <MainWrapper>
    <Row {...args}>
      <Cell>
        <p className="h2">Demo cell 01</p>
      </Cell>
      <Cell>
        <p className="h2">Demo cell 02</p>
      </Cell>
    </Row>
  </MainWrapper>
)
