import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import useTranslations from '../../../../hooks/useTranslations'

const CourseObjectives = ({ learn, text, objectives }) => {
  const t = useTranslations()

  return (
    <SectionWrapper
      isBlack
      extraClass="courseSection courseSection--objectives"
    >
      <Row type="full" extraClass="courseSection-number">
        <Cell isNegative>
          <div className="scrambleTextWrapper">
            <h3 className="h3 scrambleText">
              {t(learn, {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
          <p className="p courseSection-text">{text}</p>
          <p className="p courseSection-text">{text}</p>
        </Cell>
      </Row>
      <Row type="full" extraClass="courseSection-title">
        <Cell isNegative>
          <div className="scrambleTextWrapper">
            <h3 className="h3 scrambleText">
              {t(objectives, {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
          <p className="p courseSection-text">{text}</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

CourseObjectives.propTypes = {
  learn: PropTypes.string,
  text: PropTypes.string,
  objectives: PropTypes.string,
}

export default CourseObjectives
