import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MainWrapper = ({ isLock, children }) => {
  const classes = cx('mainWrapper', { 'is-lock': isLock })
  return <div className={classes}>{children}</div>
}

MainWrapper.propTypes = {
  isLock: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default MainWrapper
