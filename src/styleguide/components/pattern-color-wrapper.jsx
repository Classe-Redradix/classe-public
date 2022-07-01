import PropTypes from 'prop-types'
import PatternColor from './pattern-color'

const PatternColorWrapper = ({ colors }) => {
  return (
    <div className="pattern-color-wrapper">
      {colors.map(color => (
        <PatternColor
          hex={color.hex}
          name={color.name}
          key={color.name}
          alpha={color.alpha}
        />
      ))}
    </div>
  )
}

PatternColorWrapper.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape(PatternColor.propTypes)).isRequired,
}

export default PatternColorWrapper
