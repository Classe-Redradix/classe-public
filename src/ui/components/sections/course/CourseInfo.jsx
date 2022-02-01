import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import useTranslations from '../../../../hooks/useTranslations'
import Exclamation from '../../../../assets/icons/exclamation.svg'

const CourseInfo = ({ price, hours, places, students, successPercentage }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack extraClass="courseSection courseSection--info">
      <Row type="full" extraClass="courseSection-number">
        <Cell isNegative>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              {t('course:euros', {
                line: text => (
                  <span className="line">
                    {price} {text}
                  </span>
                ),
              })}
            </h3>
          </div>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              {t('course:hours', {
                line: text => (
                  <span className="line">
                    {hours} {text}
                  </span>
                ),
              })}
            </h3>
          </div>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              {t('course:places', {
                line: text => (
                  <span className="line">
                    {places} {text}
                  </span>
                ),
              })}
            </h3>
          </div>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              <span className="line line--inline">{students}</span>
              {t('course:students', {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              {t('course:success', {
                line: text => (
                  <span className="line">
                    {successPercentage} {text}
                  </span>
                ),
              })}
            </h3>
          </div>
        </Cell>
      </Row>
      <Row type="full" extraClass="courseSection-title">
        <Cell isNegative>
          <Exclamation
            viewBox="0 0 111 88"
            className="courseSection-glypBottom"
          />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

CourseInfo.propTypes = {
  price: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  students: PropTypes.number.isRequired,
  successPercentage: PropTypes.number.isRequired,
}

export default CourseInfo
