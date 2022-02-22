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

const ContactFormParamsPropType = PropTypes.shape({
  email: PropTypes.string,
  name: PropTypes.string,
  interestedInOptions: PropTypes.arrayOf(PropTypes.string),
  userType: PropTypes.oneOf(['student', 'enterprise']),
  onEmailChange: PropTypes.func,
  onNameChange: PropTypes.func,
  onUserTypeChange: PropTypes.func,
  saveToFirebase: PropTypes.func,
  onInterestedInOptionChange: PropTypes.func,
})

const DatesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        finish: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
).isRequired

const FaqsListPropType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
)

export {
  CoursePropType,
  ContactFormParamsPropType,
  DatesPropType,
  FaqsListPropType,
}
