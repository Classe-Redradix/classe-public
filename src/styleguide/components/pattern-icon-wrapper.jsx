import PropTypes from 'prop-types'
import PatternIcon from './pattern-icon'

const PatternIconWrapper = ({ icons }) => {
  return (
    <div className="pattern-icon-wrapper">
      {icons.map(icon => (
        <PatternIcon content={icon.content} url={icon.url} key={icon.url} />
      ))}
    </div>
  )
}

PatternIconWrapper.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape(PatternIcon.propTypes)).isRequired,
}

export default PatternIconWrapper
