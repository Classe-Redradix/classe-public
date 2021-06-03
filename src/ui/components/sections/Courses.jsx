import React from 'react'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import useTranslations from '../../../hooks/useTranslations'
import demoImage from '../../../assets/images/demo.png'

const Courses = () => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack extraClass="courses">
      <Row type="quarter">
        <Cell isColumn>
          <Cell>
            <h3 className="h2">
              {t('courses:claim', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </Cell>
          <Cell>
            <img src={demoImage} alt="" />
          </Cell>
        </Cell>
        <Cell>
          <p className="p">Lorem ipsum</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

export default Courses
