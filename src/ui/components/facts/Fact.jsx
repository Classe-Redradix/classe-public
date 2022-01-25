import React from 'react'
import PropTypes from 'prop-types'
import Arrow from '../../../assets/icons/arrow-icon.svg'

const Fact = ({ text }) => {
  return (
    <div className="fact">
      <div className="fact-content">
        <div className="fact-arrow">
          <Arrow viewBox="0 0 72 72" />
        </div>
        <span className="fact-text">{text}</span>
      </div>
    </div>
  )
}

Fact.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Fact
