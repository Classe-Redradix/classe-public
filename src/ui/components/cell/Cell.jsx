import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Cell = ({ hasGap, isColumn, children }) => {
  const classes = cx('cell', {
    'has-gap': hasGap,
    'is-column': isColumn,
  })
  return (
    <div className={classes}>
      {!isColumn ? (
        <>
          <div className="cell-corner is-topLeft"></div>
          <div className="cell-corner is-topRight"></div>
          <div className="cell-corner is-bottomRight"></div>
          <div className="cell-corner is-bottomLeft"></div>
        </>
      ) : null}
      {children}
    </div>
  )
}

Cell.propTypes = {
  hasGap: PropTypes.bool,
  isColumn: PropTypes.bool,
  children: PropTypes.node,
}

export default Cell
