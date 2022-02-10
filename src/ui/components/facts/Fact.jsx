import React from 'react'
import PropTypes from 'prop-types'
import ArrowFact from '../../../assets/icons/ArrowFact'

const Fact = ({ text }) => {
  return (
    <div className="fact">
      <div className="fact-content">
        <div className="fact-arrow">
          <ArrowFact viewBox="0 0 80 80" />
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
