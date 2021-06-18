import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FaqButton = ({ isActive, isOpen, onClick, description, title }) => {
  const classes = cx('faqButton', { 'is-open': isActive && isOpen })
  return (
    <div className={classes}>
      <div className="faqButton-wrapper">
        <button className="faqButton-button" onClick={onClick}>
          <span className="faqButton-buttonText notes">{title}</span>
        </button>
        <div className="faqButton-content">
          <p className="faqButton-description p">{description}</p>
        </div>
      </div>
    </div>
  )
}

FaqButton.propTypes = {
  isActive: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default FaqButton
