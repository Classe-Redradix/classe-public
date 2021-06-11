import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../../../hooks/useWindowSize'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'

const MenuLayer = ({ isOpen, handleClose }) => {
  const t = useTranslations()
  const size = useWindowSize()
  const classes = cx('menuLayer', { 'is-open': isOpen })

  return (
    <div className={classes}>
      <div className="menuLayer-wrapper">
        <div className="menuLayer-desktopHeader">
          <button
            className="menuLayer-desktopHeader-button button"
            onClick={handleClose}>
            [ {t('menu:close')} ]
          </button>
        </div>
      </div>
    </div>
  )
}

MenuLayer.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
}

export default MenuLayer
