import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Checkbox = ({ hasMessage, isChecked, handleChange, label, name }) => {
  const textClasses = cx('checkbox-label', {
    tiny: hasMessage,
    notes: !hasMessage,
  })

  return (
    <label className="checkbox" htmlFor={name}>
      <input
        className="checkbox-input"
        type="checkbox"
        id={name}
        name={name}
        value={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="checkbox-icon notes">
        [<span className="checkbox-iconCheck">X</span>]
      </span>
      <span className={textClasses}>{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Checkbox
