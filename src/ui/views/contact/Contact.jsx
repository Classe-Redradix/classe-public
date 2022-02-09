import PropTypes from 'prop-types'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Menu from '../../components/menu/Menu'

const Contact = ({ type, isBlack, courses }) => {
  return (
    <MainWrapper isBlack={isBlack}>
      <Menu type="contact" isBlack={isBlack} courses={courses} />
    </MainWrapper>
  )
}

Contact.propTypes = {}

export default Contact
