import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import useTranslations from '../../../../hooks/useTranslations'
import demoImage from '/public/images/demo-small-black.png'
import Glyph from '../../../../assets/icons/GlyphIcon'

const CourseContact = ({}) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack extraClass="courseSection courseSection--contact">
      <Row type="half" extraClass="courseSection-number">
        <Cell isNegative>
          <h3 className="h3">{t('course:contact')}</h3>
        </Cell>
        <Cell isNegative>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
      <Row type="half" extraClass="courseSection-title">
        <Cell isNegative>
          <GlyphIcon viewBox="0 0 56 73" className="courseSection-glypTop" />
          <div className="scrambleTextWrapper">
            <h3 className="h5 scrambleText">
              {t('contact:address', {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell isNegative>4</Cell>
      </Row>
    </SectionWrapper>
  )
}

CourseContact.propTypes = {}

export default CourseContact
