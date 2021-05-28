import React from 'react'
import PropTypes from 'prop-types'
import PatternFont from './pattern-font'

const PatternFontWrapper = ({ fonts }) => {
  return (
    <div className="pattern-font-wrapper">
      {fonts.map(font => (
        <PatternFont
          name={font.name}
          uppercase={font.uppercase}
          letterSpacing={font.letterSpacing}
          font={font.font}
          key={font.name}
        />
      ))}
    </div>
  )
}

PatternFontWrapper.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.shape(PatternFont.propTypes)).isRequired,
}

export default PatternFontWrapper
