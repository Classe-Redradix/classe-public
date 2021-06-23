import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import DatePicker from '../date-picker/DatePicker'
import demoImage from '../../../assets/images/demo-small.png'

const Calendar = ({ dates }) => {
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
        <Cell>
          <DatePicker dates={dates} />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Calendar.propTypes = {
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
        })
      ),
    }).isRequired
  ).isRequired,
}

export default Calendar
