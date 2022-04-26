import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Row = ({ children, extraClass, type }) => {
  const classes = cx('row', `${extraClass ? extraClass : ''}`, {
    'is-full': type === 'full',
    'is-half': type === 'half',
    'is-third': type === 'third',
    'is-quarter': type === 'quarter',
  })
  return <div className={classes}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.node,
  extraClass: PropTypes.string,
  type: PropTypes.oneOf(['full', 'half', 'third', 'quarter']).isRequired,
}

export default Row
