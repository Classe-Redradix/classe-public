import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import useTranslations from '../../../hooks/useTranslations'
import Button from '../button/Button'
import Arrow from '../../../assets/icons/arrow-icon.svg'

const DatePicker = ({ dates }) => {
  const t = useTranslations()
  gsap.registerPlugin(ScrambleTextPlugin)
  const dayRef = useRef(null)
  const monthRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(false)
  const currentDate = dates[currentIndex]
  const classes = cx('datePicker', { 'is-hidden': isHidden })

  const setDate = (currentIndex) => {
    if (dayRef.current)
      gsap.to(dayRef.current, {
        duration: 1.2,
        scrambleText: {
          text: dates[currentIndex].day,
          chars: '!@#$%&/=*',
        },
      })
    gsap.to(monthRef.current, {
      duration: 1.2,
      scrambleText: {
        text: dates[currentIndex].month,
        chars: '!@#$%&/=*',
      },
    })
  }

  const chageDate = useCallback(
    (isPrev) => {
      const prevNewCurrentIndex =
        currentIndex > 0 ? currentIndex - 1 : dates.length - 1
      const NextNewCurrentIndex =
        currentIndex < dates.length - 1 ? currentIndex + 1 : 0
      setDate(isPrev ? prevNewCurrentIndex : NextNewCurrentIndex)
      setIsHidden(true)
      setTimeout(() => {
        setCurrentIndex(isPrev ? prevNewCurrentIndex : NextNewCurrentIndex)
        setIsHidden(false)
      }, 600)
    },
    [currentIndex]
  )

  return (
    <div className={classes}>
      <div className="datePicker-date">
        {currentDate.day ? (
          <span className="datePicker-dateText h3" ref={dayRef}>
            {currentDate.day}
          </span>
        ) : null}
        <span className="datePicker-dateText h3" ref={monthRef}>
          {currentDate.month}
        </span>
        <div className="datePicker-arrows">
          <Arrow viewBox="0 0 72 72" onClick={() => chageDate(true)} />
          <Arrow viewBox="0 0 72 72" onClick={() => chageDate(false)} />
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
