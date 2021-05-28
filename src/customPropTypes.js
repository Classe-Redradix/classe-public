import PropTypes from 'prop-types'

// For react-router (e.g. Link and Redirect components)
export const link = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object
  }),
  PropTypes.func
])
