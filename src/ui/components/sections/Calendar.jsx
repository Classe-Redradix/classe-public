import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import DatePicker from '../date-picker/DatePicker'
import demoImage from '/public/images/demo-small.png'
import { DatesPropType } from './../../sharedProptypes'

const Calendar = ({ dates, isBlack, isFluor, openContact }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="calendar">
      <Row type="half">
        <Cell>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('calendar:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
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
        <Cell>
          <DatePicker dates={dates} openContact={openContact} />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Calendar.propTypes = {
  dates: PropTypes.arrayOf(DatesPropType).isRequired,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Calendar
