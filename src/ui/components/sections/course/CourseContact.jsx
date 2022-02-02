import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import useTranslations from '../../../../hooks/useTranslations'
import demoImage from '/public/images/demo-small-black.png'
import GlyphIcon from './../../../../assets/icons/GlyphIcon'

const CourseContact = ({}) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack extraClass="courseSection courseSection--contact">
      <Row type="half" extraClass="courseSection-number">
        <Cell isNegative>
          <h3 className="h3">
            ¿hechas algo en falta? puedes combinar todo el temario de todos
            nuestros cursos como mejor se adapte a lo que BUSCAS
          </h3>
        </Cell>
        <Cell isNegative>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
      <Row type="half" extraClass="courseSection-title">
        <Cell isNegative>
          <GlyphIcon className="icon courseSection-glypTop" />
          <p className="h5">Madrid, Calatrava 27 [Metro La Latina]</p>
          <p className="h5">INFO[AT]CLASSE.COM</p>
          <p className="h5">+34 000 000 000</p>
        </Cell>
        <Cell isNegative>4</Cell>
      </Row>
    </SectionWrapper>
  )
}

CourseContact.propTypes = {}

export default CourseContact
