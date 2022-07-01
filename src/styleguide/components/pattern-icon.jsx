import PropTypes from 'prop-types'

const PatternIcon = ({ content, url }) => {
  return (
    <div className="pattern-icon">
      <div
        className="icon-container"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <p className="icon-name">{url}</p>
    </div>
  )
}

PatternIcon.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default PatternIcon
