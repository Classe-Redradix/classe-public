import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Paragraphs = ({ text, extraClass }) => {
  return (
    <div className={cx('wrap-p', `${extraClass ? extraClass : ''}`)}>
      {text.split('\n').map((p, index) => (
        <p key={index} className="p">
          {p}
        </p>
      ))}
    </div>
  )
}

Paragraphs.propTypes = {
  extraClass: PropTypes.string,
  p: PropTypes.string,
}

export default Paragraphs
