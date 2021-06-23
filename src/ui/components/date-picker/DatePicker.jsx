import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import Button from '../button/Button'
import Arrow from '../../../assets/icons/arrow-icon.svg'

const DatePicker = ({ dates }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentDate = dates[currentIndex]
  const t = useTranslations()

  const prevDate = useCallback(() => {
    const newCurrentIndex =
      currentIndex > 0 ? currentIndex - 1 : dates.length - 1
    setCurrentIndex(newCurrentIndex)
  }, [currentIndex])

  const nextDate = useCallback(() => {
    const newCurrentIndex =
      currentIndex < dates.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newCurrentIndex)
  }, [currentIndex])

  return (
    <div className="datePicker">
      <div className="datePicker-date">
        {currentDate.day ? (
          <span className="datePicker-dateText h3">{currentDate.day}</span>
        ) : null}
        <span className="datePicker-dateText h3">{currentDate.month}</span>
        <div className="datePicker-arrows">
          <Arrow viewBox="0 0 43 44" onClick={prevDate} />
          <Arrow viewBox="0 0 43 44" onClick={nextDate} />
        </div>
      </div>
      <div className="datePicker-carousel">
        {currentDate.courses.map((course) => (
          <div className="datePicker-courseWrapper" key={course.title}>
            <div className="datePicker-course h3">
              {`{`}
              <span className="datePicker-courseTitle">{course.title}</span>
              <div className="datePicker-courseDates">
                <span className="notes">
                  {t('calendar:start')}: {course.start};
                </span>
                <span className="notes">
                  {t('calendar:finish')}: {course.finish};
                </span>
              </div>
              {`}`}
            </div>
            <Button isLink href={course.to} text="Inscríbeme" />
          </div>
        ))}
      </div>
    </div>
  )
}

DatePicker.propTypes = {
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

export default DatePicker
