import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useWindowSize from '../../../hooks/useWindowSize'
import useTranslations from '../../../hooks/useTranslations'
import Row from '../row/Row'
import Cell from '../cell/Cell'

const MenuLayer = ({ courses, isOpen, handleClose }) => {
  const t = useTranslations()
  const size = useWindowSize()
  const classes = cx('menuLayer', { 'is-open': isOpen })
  const isDesktop = size.width >= 768

  return (
    <div className={classes}>
      <div className="menuLayer-wrapper">
        {isDesktop ? (
          <div className="menuLayer-desktopHeader">
            <button
              className="menuLayer-desktopHeader-button button"
              onClick={handleClose}>
              [ {t('menu:close')} ]
            </button>
          </div>
        ) : null}
        <div className="menuLayer-content">
          {!isDesktop ? (
            <Row type="half" extraClass="menuLayer-mobileHeader">
              <Cell isNegative>
                <p>[Light Mode]</p>
              </Cell>
              <Cell isNegative>
                <p>[Dark Mode]</p>
              </Cell>
            </Row>
          ) : null}
          <Row type="quarter" extraClass="menuLayer-courses">
            <Cell isNegative>
              <p>image</p>
            </Cell>
            <Cell isNegative>
              <p>courses</p>
            </Cell>
          </Row>
          <Row type="full" extraClass="menuLayer-menu">
            <Cell isNegative>
              <span className="menuDesktop-claim menu">{t('menu:claim')}</span>
              <span
                className="menuDesktop-button menu"
                aria-label={t('menu:courses')}>
                [{courses.length < 10 ? `0${courses.length}` : courses.length}]{' '}
                {t('menu:courses')}
              </span>
              <button
                className="menuDesktop-link menu"
                aria-label={t('menu:contact')}>
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
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
}

export default MenuLayer
