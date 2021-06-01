import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Row = ({ children, type }) => {
  const classes = cx('row', {
    'is-full': type === 'full',
    'is-half': type === 'half',
    'is-third': type === 'third',
    'is-quarter': type === 'quarter',
  })
  return <div className={classes}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['full', 'half', 'third', 'quarter']).isRequired,
}

export default Row
