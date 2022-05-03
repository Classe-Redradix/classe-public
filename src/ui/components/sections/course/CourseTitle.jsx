import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import useFitText from 'use-fit-text'

const CourseTitle = ({ title }) => {
  const onFinish = useCallback(fontSize => {}, [])
  const { fontSize, ref } = useFitText({ maxFontSize: 700, onFinish })

  return (
    <SectionWrapper isBlack extraClass="courseTitle">
      <Row type="full" extraClass="courseTitle-name">
        <Cell isNegative extraClass="courseTitle-cell">
          <h2
            className="courseTitle-nameText"
            ref={ref}
            // style={{
            //   fontSize,
            // }}
          >
            {title}
          </h2>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

CourseTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CourseTitle
