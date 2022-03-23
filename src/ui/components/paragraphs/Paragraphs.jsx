import React from 'react'
import PropTypes from 'prop-types'

const Paragraphs = ({ text }) => {
  return (
    <div className="wrap-p">
      {text.split('\n').map((p, index) => (
        <p key={index} className="p">
          {p}
        </p>
      ))}
    </div>
  )
}

Paragraphs.propTypes = {
  p: PropTypes.string,
}

export default Paragraphs
