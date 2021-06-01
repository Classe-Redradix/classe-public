import React from 'react'
import MainWrapper from '../wrappers/MainWrapper'
import Row from '../row/Row'
import Cell from './Cell'

export default {
  title: 'Components',
}

export const cell = () => (
  <MainWrapper>
    <Row type="full">
      <Cell>
        <p>Demo cell 01</p>
      </Cell>
    </Row>
  </MainWrapper>
)
