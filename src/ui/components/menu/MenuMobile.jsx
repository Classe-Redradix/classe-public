import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'

const MenuMobile = (props, ref) => {
  const t = useTranslations()
  const classes = cx('menuMobile', {
    'is-black': props.isBlack,
    'is-fluor': props.isFluor,
    'is-open': props.isOpen,
  })

  return (
    <header className={classes} ref={ref}>
      <span className="menuMobile-claim h3">{t('menu:claimSmall')}</span>
      <button
        className="menuMobile-button menu"
        onClick={props.isOpen ? props.handleClose : props.handleOpen}
        aria-label={props.isOpen ? t('menu:close') : t('menu:open')}>
        [{props.isOpen ? t('menu:close') : t('menu:open')}]
      </button>
    </header>
  )
}

MenuMobile.props = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default forwardRef(MenuMobile)
