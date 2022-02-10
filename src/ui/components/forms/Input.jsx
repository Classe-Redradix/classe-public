import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ArrowIcon from './../../../assets/icons/ArrowIcon'

const Input = ({
  handleBlur,
  handleChange,
  handleSubmit,
  name,
  placeholder,
  type,
  value,
  isNegative,
}) => {
  const classes = cx('input', {
    'has-submit': handleSubmit,
    'is-negative': isNegative,
  })

  return (
    <div className={classes}>
      <input
        className="input-field"
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {handleSubmit ? (
        <ArrowIcon className="icon input-submit" onClick={handleSubmit} />
      ) : null}
    </div>
  )
}

Input.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'text']).isRequired,
  value: PropTypes.string.isRequired,
  isNegative: PropTypes.bool,
}

export default Input
