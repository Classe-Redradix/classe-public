import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import Button from '../../button/Button'

const CoursePdf = ({ title, href, textButton }) => {
  return (
    <SectionWrapper isBlack extraClass="coursePdf">
      <Row type="full" extraClass="courseSection-pdf">
        <Cell isNegative>
          <h3 className="h2" aria-hidden="true">
            {title}
          </h3>
          <Button href={href} text={textButton} isLink isNegative targetBlank />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

CoursePdf.propTypes = {
  title: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  href: PropTypes.string,
}

export default CoursePdf
