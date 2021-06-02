import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../Row'
import Cell from '../../cell/Cell'

export default {
  title: 'Components/Row/Row',
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
    <SectionWrapper>
      <Row {...args}>
        <Cell>
          <p className="h2">Demo cell 01</p>
        </Cell>
        <Cell>
          <p className="h2">Demo cell 02</p>
        </Cell>
      </Row>
    </SectionWrapper>
  </MainWrapper>
)
