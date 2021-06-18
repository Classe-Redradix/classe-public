import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FaqButton from './FaqButton'

const FaqsContainer = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const toggle = (index) => {
    if (index === activeItem) {
      setIsOpen((isState) => !isState)
      setActiveItem(index)
    } else {
      setIsOpen(true)
      setActiveItem(index)
    }
  }

  return (
    <div className="faqsContainer">
      <div className="faqsContainer-wrapper">
        {list.map((faq, index) => (
          <FaqButton
            isActive={index === activeItem}
            isOpen={isOpen}
            onClick={() => toggle(index)}
            title={faq.title}
            description={faq.description}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

FaqsContainer.propTpes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FaqsContainer
