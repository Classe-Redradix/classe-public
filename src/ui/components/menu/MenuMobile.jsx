import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'

const MenuMobile = ({
  isBlack,
  isFluor,
  openCourses,
  isContactOpen,
  isCourseOpen,
  areCoursesOpen,
  handleClose,
}) => {
  const isOpen = isContactOpen || isCourseOpen || areCoursesOpen
  const t = useTranslations()
  const classes = cx('menuMobile', {
    'is-black': isBlack,
    'is-fluor': isFluor,
    'is-open': isOpen,
  })

  return (
    <header className={classes}>
      <a href="/" className="menuMobile-claim h2">
        {t('menu:claimSmall')}
      </a>
      <button
        className="menuMobile-button menu"
        onClick={isOpen ? handleClose : openCourses}
        aria-label={isOpen ? t('menu:close') : t('menu:open')}
      >
        [{isOpen ? t('menu:close') : t('menu:open')}]
      </button>
    </header>
  )
}

MenuMobile.props = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default MenuMobile
