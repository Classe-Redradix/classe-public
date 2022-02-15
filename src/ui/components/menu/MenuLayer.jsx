import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useWindowSize from '../../../hooks/useWindowSize'
import useTranslations from '../../../hooks/useTranslations'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import CoursesList from './CoursesList'
import MenuContact from './MenuContact'

const MenuLayer = ({
  courses,
  isContactOpen,
  isCourseOpen,
  areCoursesOpen,
  handleClose,
  handleContactOpen,
  hasClose = true,
}) => {
  const isOpen = isContactOpen || areCoursesOpen || isCourseOpen
  const t = useTranslations()
  const size = useWindowSize()
  const [linesHidden, setLinesHidden] = useState(false)
  const classes = cx('menuLayer', {
    'is-open': isOpen,
    'is-free': isContactOpen || isCourseOpen,
  })
  const isDesktop = size.width >= 768

  useEffect(() => {
    if (isOpen) {
      setLinesHidden(true)
    } else {
      setLinesHidden(false)
    }
  }, [isOpen])

  return (
    <div className={classes}>
      <div className="menuLayer-wrapper">
        {isDesktop && hasClose ? (
          <div className="menuLayer-desktopHeader">
            <button
              className="menuLayer-desktopHeader-button button"
              onClick={handleClose}
            >
              [ <span className="braketHover">{t('menu:close')}</span> ]
            </button>
          </div>
        ) : null}
        <div className="menuLayer-content">
          {!isDesktop ? (
            <Row type="half" extraClass="menuLayer-mobileHeader">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>[Light Mode]</p>
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>[Dark Mode]</p>
              </Cell>
            </Row>
          ) : null}
          {isContactOpen ? (
            <MenuContact linesHidden={linesHidden} />
          ) : isCourseOpen ? (
            <div>course</div>
          ) : (
            <Row type="quarter" extraClass="menuLayer-courses">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>image</p>
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <CoursesList courses={courses} />
              </Cell>
            </Row>
          )}
          <Row type="full" extraClass="menuLayer-menu">
            <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
              <span className="menuDesktop-claim menu">{t('menu:claim')}</span>
              <span
                className="menuDesktop-button menu"
                aria-label={t('menu:courses')}
              >
                [{courses.length < 10 ? `0${courses.length}` : courses.length}]{' '}
                {t('menu:courses')}
              </span>
              <button
                onClick={handleContactOpen}
                className="menuDesktop-link"
                aria-label={t('menu:contact')}
              >
                {t('menu:contact')}
              </button>
            </Cell>
          </Row>
        </div>
      </div>
    </div>
  )
}

MenuLayer.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isOpen: PropTypes.bool,
  hasClose: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleContactOpen: PropTypes.func.isRequired,
}

export default MenuLayer
