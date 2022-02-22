import PropTypes from 'prop-types'

const CoursePropType = PropTypes.shape({
  id: PropTypes.string,
  href: PropTypes.string,
  information: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.string,
    finish: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    number: PropTypes.number,
    places: PropTypes.number,
    enrolledStudents: PropTypes.number,
    successPercentage: PropTypes.number,
  }),
  index: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  objetives: PropTypes.arrayOf(PropTypes.string),
})

export { CoursePropType }
