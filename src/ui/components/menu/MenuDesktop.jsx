import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'
import Cell from '../cell/Cell'
import Link from 'next/link'

const MenuDesktop = ({
  isBlack,
  isFluor,
  handleCoursesOpen,
  handleContactOpen,
  courses,
}) => {
  const t = useTranslations()
  const classes = cx('menuDesktop', {
    'is-black': isBlack,
    'is-fluor': isFluor,
  })

  return (
    <header className={classes}>
      <Cell isNegative={isBlack}>
        <span className="menuDesktop-claim menu">{t('menu:claim')}</span>
        <Link href="/" as="/courses">
          <button
            className="menuDesktop-button menu"
            onClick={handleCoursesOpen}
            aria-label={t('menu:courses')}
          >
            [
            <span className="braketHover">
              {courses < 10 ? `0${courses}` : courses}
            </span>
            ] {t('menu:courses')}
          </button>
        </Link>
        <Link href="/" as="/contact">
          <button
            onClick={handleContactOpen}
            className="menuDesktop-link menu"
            aria-label={t('menu:contact')}
          >
            {t('menu:contact')}
          </button>
        </Link>
      </Cell>
    </header>
  )
}

MenuDesktop.propTypes = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  handleCoursesOpen: PropTypes.func.isRequired,
  handleContactOpen: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default MenuDesktop
