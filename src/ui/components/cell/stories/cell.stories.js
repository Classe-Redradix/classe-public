import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../Cell'

export default {
  title: 'Components/Cell',
  component: Cell,
  argTypes: {
    isAnimated: {
      name: 'isAnimated',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
    },
    hasLinesHidden: {
      name: 'hasLinesHidden',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
    },
  }
}

export const cell = ({ ...args }) => (
  <MainWrapper>
    <SectionWrapper>
      <Row type="full">
        <Cell {...args}>
          <p className="h1">Demo cell 01</p>
        </Cell>
      </Row>
    </SectionWrapper>
  </MainWrapper>
)
