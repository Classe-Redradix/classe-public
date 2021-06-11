import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'
import Cell from '../cell/Cell'

const MenuMobile = (props, ref) => {
  const t = useTranslations()
  const classes = cx('menuMobile', {
    'is-black': props.isBlack,
    'is-fluor': props.isFluor,
  })

  return (
    <header className={classes} ref={ref}>
      <Cell>
        <span className="menuMobile-claim h3">{t('menu:claimSmall')}</span>
        <button
          className="menuMobile-button menu"
          onClick={props.handleOpen}
          aria-label={t('menu:open')}>
          [{t('menu:open')}]
        </button>
      </Cell>
    </header>
  )
}

MenuMobile.props = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default forwardRef(MenuMobile)
