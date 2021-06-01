import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Cell = ({ children }) => {
  const classes = cx('cell')
  return (
    <div className={classes}>
      <div className="cell-corner is-topLeft"></div>
      <div className="cell-corner is-topRight"></div>
      <div className="cell-corner is-bottomRight"></div>
      <div className="cell-corner is-bottomLeft"></div>
      {children}
    </div>
  )
}

Cell.propTypes = {
  children: PropTypes.node,
}

export default Cell
