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

const Course = ({ dates, name }) => {
  const t = useTranslations()
  const onFinish = useCallback(fontSize => {}, [])
  const { fontSize, ref } = useFitText({ maxFontSize: 5000, onFinish })

  return (
    <SectionWrapper isBlack extraClass="courseIntro">
      <Row type="full" extraClass="courseIntro-name">
        <Cell isNegative>
          <div
            className="courseIntro-nameText"
            ref={ref}
            style={{
              fontSize,
            }}
          >
            <TabIcon className="courseIntro-tab" />
            {name}
          </div>
        </Cell>
      </Row>
      <Row type="half">
        <Cell isNegative>
          <img src={demoImage} alt="" />
        </Cell>
        <Cell isColumn isNegative>
          <Cell isNegative>
            <DatePicker dates={dates} isCourse />
          </Cell>
          <Cell isNegative>
            <div className="courseIntro-description">
              <p class="p">
                Curso de 20h de profundización en el lenguaje para convertirse
                en un experto. Se tratarán los principios que van más allá de
                cualquier librería o de cualquier framework. Fundamentos sólidos
                sobre los que construir. Los objetivos son dominar el lenguaje
                por completo y asimilar los patrones más complejos.
              </p>
              <p class="p">
                Todos nuestros cursos son configurables para poder adaptarse a
                tus necesidades y las de tu empresa
              </p>
            </div>
            <div className="courseIntro-actions">
              <Button isLink isNegative href="/" text={t('course:button')} />
              <span class="p uppercase">Scroll o drag</span>
            </div>
          </Cell>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Course.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      month: PropTypes.string.isRequired,
      courses: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          start: PropTypes.string.isRequired,
          finish: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
}

export default Course
