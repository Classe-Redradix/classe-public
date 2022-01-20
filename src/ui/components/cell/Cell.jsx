import PropTypes from 'prop-types'
import cx from 'classnames'

const Cell = ({
  hasGap,
  hasLinesHidden,
  isAnimated,
  isColumn,
  isNegative,
  children,
}) => {
  const classes = cx('cell', {
    'has-gap': hasGap,
    'has-linesHidden': hasLinesHidden,
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
      {isAnimated ? (
        <>
          <div className="cell-line is-top"></div>
          <div className="cell-line is-right"></div>
          <div className="cell-line is-bottom"></div>
          <div className="cell-line is-left"></div>
        </>
      ) : null}
      {children}
    </div>
  )
}

Cell.propTypes = {
  hasGap: PropTypes.bool,
  hasLinesHidden: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isColumn: PropTypes.bool,
  isNegative: PropTypes.bool,
  children: PropTypes.node,
}

export default Cell
