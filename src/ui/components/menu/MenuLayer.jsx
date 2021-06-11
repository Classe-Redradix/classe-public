import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useWindowSize from '../../../hooks/useWindowSize'
import useTranslations from '../../../hooks/useTranslations'
import Row from '../row/Row'
import Cell from '../cell/Cell'

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
        <div className="menuLayer-content">
          <Row type="quarter">
            <Cell isNegative></Cell>
            <Cell isNegative></Cell>
          </Row>
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
