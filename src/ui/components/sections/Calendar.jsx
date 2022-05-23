import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Paragraphs from '../paragraphs/Paragraphs'
import DatePicker from '../date-picker/DatePicker'
import image from '/public/images/haz-hueco-en-tu-agenda.jpg'
import { DatesPropType } from './../../sharedProptypes'

const Calendar = ({ dates, isBlack, isFluor, openContact }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="calendar">
      <Row type="half">
        <Cell>
          <div className="scrambleTextWrapper">
            <h2 className="h1 scrambleText">
              {t('calendar:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </div>
        </Cell>
        <Cell>
          <img
            className="bwfilter"
            src={image}
            alt="Un estudiante de programación atendiendo a una charla"
          />
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap>
          <Paragraphs text={t('calendar:description')} />
        </Cell>
        <Cell>
          {dates ? (
            <DatePicker dates={dates} openContact={openContact} />
          ) : (
            <Paragraphs text={t('calendar:no-courses')} />
          )}
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Calendar.propTypes = {
  dates: DatePicker.propTypes.dates,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Calendar
