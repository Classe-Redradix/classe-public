import React from 'react'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import demoImage from '../../../assets/images/demo-small.png'

const Calendar = () => {
  const t = useTranslations()

  return (
    <SectionWrapper extraClass="calendar">
      <Row type="half">
        <Cell>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('calendar:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap>
          <p className="p">{t('calendar:description')}</p>
        </Cell>
        <Cell hasGap>
          <p>Calendar</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

export default Calendar
