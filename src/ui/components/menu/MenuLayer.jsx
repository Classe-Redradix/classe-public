import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { MEDIA_QUERIES } from '../../../constants'

import useWindowSize from '../../../hooks/useWindowSize'
import useTranslations from '../../../hooks/useTranslations'

import Row from '../row/Row'
import Cell from '../cell/Cell'
import CoursesList from './CoursesList'
import MenuContact from './MenuContact'
import MenuCourse from './MenuCourse'
import { CoursePropType } from '../../sharedProptypes'
import image from '/public/images/cursos.jpg'

const MenuLayer = ({
  course,
  courses,
  contactFormParams,
  isContactOpen,
  isCourseOpen,
  areCoursesOpen,
  handleClose,
  openContact,
  goToHome,
  openCourse,
  openCourses,
  hasClose = true,
  actionText = 'menu:close',
}) => {
  const isOpen = isContactOpen || areCoursesOpen || isCourseOpen
  const t = useTranslations()
  const size = useWindowSize()
  const [linesHidden, setLinesHidden] = useState(false)
  const classes = cx('menuLayer', {
    'is-open': isOpen,
    'is-free': isContactOpen || isCourseOpen,
    'is-course': isCourseOpen,
  })
  const isDesktop = size.width >= MEDIA_QUERIES.desktop

  useEffect(() => {
    if (isOpen) {
      setLinesHidden(true)
    } else {
      setLinesHidden(false)
    }
  }, [isOpen])

  const hasHomeTitle = !areCoursesOpen && !isCourseOpen && !isContactOpen

  return (
    <div className={classes}>
      {hasHomeTitle ? <h1 className="sr-only">{t('home:title')}</h1> : null}
      <div className="menuLayer-wrapper">
        {isDesktop && hasClose ? (
          <div className="menuLayer-desktopHeader">
            <button
              className="menuLayer-desktopHeader-button button"
              onClick={handleClose}
              role="link"
            >
              [ <span className="braketHover">{t(actionText)}</span> ]
            </button>
          </div>
        ) : null}
        <div
          className={cx('menuLayer-content', {
            'is-block': isCourseOpen,
          })}
        >
          {!isDesktop ? (
            <Row type="half" extraClass="menuLayer-mobileHeader">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>[ Light Mode ]</p>
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>[ Dark Mode ]</p>
              </Cell>
            </Row>
          ) : null}
          {isContactOpen ? (
            <MenuContact
              linesHidden={linesHidden}
              contactFormParams={contactFormParams}
            />
          ) : isCourseOpen ? (
            <MenuCourse
              isCourseOpen={isCourseOpen}
              course={course}
              openContact={openContact}
            />
          ) : (
            <Row type="quarter" extraClass="menuLayer-courses">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <img
                  className="bwfilter"
                  src={image}
                  alt={t('alt-image:three-web-developers')}
                />
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <CoursesList
                  courses={courses}
                  openCourse={openCourse}
                  isPlacedAtHome={!areCoursesOpen}
                />
              </Cell>
            </Row>
          )}
          {!isCourseOpen ? (
            <Row type="full" extraClass="menuLayer-menu">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <a
                  href="/"
                  className="menuDesktop-claim menu"
                  onClick={goToHome}
                >
                  {t('menu:claim')}
                </a>
                <span
                  onClick={openCourses}
                  className="menuDesktop-button menu"
                  aria-label={t('menu:courses')}
                >
                  [{courses.length < 10 ? `0${courses.length}` : courses.length}
                  ] {t('menu:courses')}
                </span>
                <button
                  onClick={openContact}
                  className="menuDesktop-link"
                  aria-label={t('menu:contact')}
                  role="link"
                >
                  {t('menu:contact')}
                </button>
              </Cell>
            </Row>
          ) : null}
        </div>
      </div>
    </div>
  )
}

MenuLayer.propTypes = {
  course: CoursePropType,
  courses: PropTypes.arrayOf(CoursePropType.isRequired).isRequired,
  isOpen: PropTypes.bool,
  hasClose: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  openContact: PropTypes.func.isRequired,
  openCourse: PropTypes.func.isRequired,
}

export default MenuLayer
