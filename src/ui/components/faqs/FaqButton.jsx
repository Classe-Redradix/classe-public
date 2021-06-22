import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FaqButton = ({ isActive, isOpen, onClick, description, title }) => {
  const [height, setHeight] = useState(0)
  const descriptionRef = useRef(null)
  const classes = cx('faqButton', { 'is-open': isActive && isOpen })

  const getHeight = () => {
    const height = descriptionRef.current.clientHeight
    const margin = parseInt(
      window.getComputedStyle(descriptionRef.current).marginBottom,
      10
    )
    setHeight(height + margin)
  }

  useEffect(() => {
    getHeight()
    window.addEventListener('resize', () => getHeight())
    return window.removeEventListener('resize', () => getHeight())
  }, [])

  return (
    <div className={classes}>
      <div className="faqButton-wrapper">
        <button className="faqButton-button" onClick={onClick}>
          <span className="faqButton-buttonText notes">{title}</span>
          <span className="faqButton-buttonIcon"></span>
        </button>
        <div className="faqButton-content" style={{ height: height }}>
          <p className="faqButton-description p" ref={descriptionRef}>
            {description}
          </p>
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
