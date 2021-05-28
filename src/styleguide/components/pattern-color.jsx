import React from 'react'
import PropTypes from 'prop-types'

const PatternColor = ({ hex, name, alpha }) => {
  return (
    <div className="pattern-color">
      <div
        className="color-bg"
        style={{ backgroundColor: `#${hex}`, opacity: alpha }}
      ></div>
      <div className="color-descripcion">
        <p>
          <strong>{`#${hex}`}</strong>
        </p>
        <p></p>
        <p>{name}</p>
      </div>
    </div>
  )
}

PatternColor.propTypes = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alpha: PropTypes.number.isRequired,
}

export default PatternColor
