import React from 'react'
import MainWrapper from '../../wrappers/MainWrapper'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../Cell'

export default {
  title: 'Components/Cell',
}

export const cell = () => (
  <MainWrapper>
    <SectionWrapper>
      <Row type="full">
        <Cell>
          <p className="h1">Demo cell 01</p>
        </Cell>
      </Row>
    </SectionWrapper>
  </MainWrapper>
)
