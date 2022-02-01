import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MainWrapper = ({ extraClass, isBlack, isFluor, isLock, children }) => {
  const classes = cx('mainWrapper', `${extraClass ? extraClass : ''}`, {
    'is-black': isBlack,
    'is-fluor': isFluor,
    'is-lock': isLock,
  })
  return <div className={classes}>{children}</div>
}

MainWrapper.propTypes = {
  extraClass: PropTypes.string,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool,
  isLock: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default MainWrapper
