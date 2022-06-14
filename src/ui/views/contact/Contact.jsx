import PropTypes from 'prop-types'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Menu from '../../components/menu/Menu'
import {
  CoursePropType,
  ContactFormParamsPropType,
} from '../../sharedProptypes'

const Contact = ({ isBlack, courses, contactFormParams }) => {

  return (
    <MainWrapper isBlack={isBlack}>
      <Menu
        isBlack={isBlack}
        courses={courses}
        contactFormParams={contactFormParams}
      />
    </MainWrapper>
  )
}

Contact.propTypes = {
  isBlack: PropTypes.bool,
  courses: PropTypes.arrayOf(CoursePropType),
  contactFormParams: ContactFormParamsPropType,
}

export default Contact
