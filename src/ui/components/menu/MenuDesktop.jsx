import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'
import Cell from '../cell/Cell'

const MenuDesktop = (props, ref) => {
  const t = useTranslations()
  const classes = cx('menuDesktop', {
    'is-black': props.isBlack,
    'is-fluor': props.isFluor,
  })

  return (
    <header className={classes} ref={ref}>
      <Cell isNegative={props.isBlack}>
        <span className="menuDesktop-claim menu">{t('menu:claim')}</span>
        <button
          className="menuDesktop-button menu"
          onClick={props.handleOpen}
          aria-label={t('menu:courses')}>
          {props.courses < 10
            ? `[0${props.courses}] ${t('menu:courses')}`
            : `${t('menu:courses')}`}
        </button>
        <button
          className="menuDesktop-button menu"
          aria-label={t('menu:contact')}>
          {t('menu:contact')}
        </button>
      </Cell>
    </header>
  )
}

MenuDesktop.props = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default forwardRef(MenuDesktop)
