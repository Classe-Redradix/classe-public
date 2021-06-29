import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MainWrapper = ({ isBlack, isFluor, isLock, children }) => {
  const classes = cx('mainWrapper', {
    'is-black': isBlack,
    'is-fluor': isFluor,
    'is-lock': isLock,
  })
  return <div className={classes}>{children}</div>
}

MainWrapper.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
  isLock: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default MainWrapper
