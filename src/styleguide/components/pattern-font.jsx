import PropTypes from 'prop-types'

const PatternFont = ({ name, uppercase, letterSpacing, font }) => {
  return (
    <div className="pattern-font">
      <div className="name">{name}</div>
      <div
        className="sample"
        style={{
          fontFamily: font.family,
          fontSize: font.size,
          fontWeight: font.weight,
          letterSpacing: letterSpacing,
          textTransform: uppercase ? 'uppercase' : undefined,
        }}
      >
        This is a font example
      </div>
    </div>
  )
}

PatternFont.propTypes = {
  name: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  letterSpacing: PropTypes.number.isRequired,
  font: PropTypes.shape({
    family: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
}

export default PatternFont
