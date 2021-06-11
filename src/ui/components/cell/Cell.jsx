import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Cell = ({ hasGap, isColumn, isNegative, children }) => {
  const classes = cx('cell', {
    'has-gap': hasGap,
    'is-column': isColumn,
    'is-negative': isNegative,
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
  isNegative: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Cell
