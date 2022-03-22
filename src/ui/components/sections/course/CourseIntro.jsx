import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import Button from '../../button/Button'
import demoImage from '/public/images/demo-small-black.png'
import TabIcon from './../../../../assets/icons/TabIcon'
import DatePicker from '../../date-picker/DatePicker'
import useTranslations from '../../../../hooks/useTranslations'
import useFitText from 'use-fit-text'
import { DatesPropType } from './../../../sharedProptypes'

const Course = ({ dates, name, openContact, course }) => {
  const t = useTranslations()
  const onFinish = useCallback(fontSize => {}, [])
  const { fontSize, ref } = useFitText({ maxFontSize: 5000, onFinish })

  return (
    <SectionWrapper isBlack extraClass="courseIntro">
      <Row type="full" extraClass="courseIntro-name">
        <Cell isNegative>
          <h1
            className="courseIntro-nameText"
            ref={ref}
            style={{
              fontSize,
            }}
          >
            <TabIcon className="courseIntro-tab" aria-hidden="true" />
            {name}
          </h1>
        </Cell>
      </Row>
      <Row type="half" extraClass="courseIntro-data">
        <Cell isNegative>
          <img src={demoImage} alt="" />
        </Cell>

        {/**
         * TODO: when the course is private, fix the layout with the correct
         * layout
         */}
        <Cell isColumn isNegative>
          {course.isPublic ? (
            <Cell isNegative>
              <DatePicker dates={dates} isCourse />
            </Cell>
          ) : (
            <Cell isNegative>
              <div className="courseIntro-help">
                <p>{t('course:need-more-details')}</p>
                <Button
                  isNegative
                  onClick={openContact}
                  text={t('course:contact-us')}
                />
              </div>
            </Cell>
          )}
          <Cell isNegative>
            <div className="courseIntro-description">
              <p className="p">
                Curso de 20h de profundización en el lenguaje para convertirse
                en un experto. Se tratarán los principios que van más allá de
                cualquier librería o de cualquier framework. Fundamentos sólidos
                sobre los que construir. Los objetivos son dominar el lenguaje
                por completo y asimilar los patrones más complejos.
              </p>
              <p className="p">
                Todos nuestros cursos son configurables para poder adaptarse a
                tus necesidades y las de tu empresa
              </p>
            </div>
            <div className="courseIntro-actions">
              {/**
               * TODO: add the `href` attribute to provide the link the course
               * route to the contact page (e.g. `/contact/interested-in=js-pro`,
               * `/contact/interested-in=full-stack`)
               * Now it's working, but we should implement it for SEO
               */}
              {course.isPublic ? (
                <Button
                  isNegative
                  onClick={openContact}
                  text={t('course:button')}
                />
              ) : null}
              <span className="p uppercase">Scroll o drag</span>
            </div>
          </Cell>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Course.propTypes = {
  dates: PropTypes.arrayOf(DatesPropType).isRequired,
  name: PropTypes.string.isRequired,
  openContact: PropTypes.func,
}

export default Course
