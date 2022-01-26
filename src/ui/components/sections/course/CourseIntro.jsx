import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import demoImage from '../../../../assets/images/demo-small-black.png'
import Tab from '../../../../assets/icons/tab-icon.svg'
import DatePicker from '../../date-picker/DatePicker'
import useFitText from 'use-fit-text'

const Course = ({ dates, name }) => {
  const onStart = useCallback(() => {
    console.log('resizing started')
  }, [])
  const onFinish = useCallback(fontSize => {
    console.log('resizing finished', fontSize)
  }, [])
  const { fontSize, ref } = useFitText({ maxFontSize: 5000, onStart, onFinish })
  return (
    <SectionWrapper isBlack extraClass="courseIntro">
      <Row type="full" extraClass="courseIntro-name">
        <Cell isNegative>
          <div
            ref={ref}
            style={{
              fontSize,
              'white-space': 'nowrap',
            }}
          >
            <Tab viewBox="0 0 85 73" style={{ color: 'white' }} />
            {name}
          </div>
        </Cell>
      </Row>
      <Row type="third">
        <Cell isNegative>
          <img src={demoImage} alt="" />
        </Cell>
        <Cell isColumn isNegative>
          <Cell isNegative>
            <DatePicker dates={dates} isCourse />
          </Cell>
          <Cell isNegative>
            <p>
              Curso de 20h de profundización en el lenguaje para convertirse en
              un experto. Se tratarán los principios que van más allá de
              cualquier librería o de cualquier framework. Fundamentos sólidos
              sobre los que construir. Los objetivos son dominar el lenguaje por
              completo y asimilar los patrones más complejos.
            </p>
            <p>
              Todos nuestros cursos son configurables para poder adaptarse a tus
              necesidades y las de tu empresa
            </p>
          </Cell>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Course.propTypes = {}

export default Course
