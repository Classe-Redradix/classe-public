import useContactForm from 'app/useContactForm'
import Error from 'ui/views/error/Error'
import COURSES from '../../../pages/data/courses'

const Error404 = () => {
  const {
    email,
    onEmailChange,
    userType,
    onUserTypeChange,
    interestedInOptions,
    onInterestedInOptionChange,
    name,
    onNameChange,
    saveToFirebase: saveContactFormToFirebase,
  } = useContactForm()

  const contactFormParams = {
    email,
    onEmailChange,
    userType,
    onUserTypeChange,
    interestedInOptions,
    onInterestedInOptionChange,
    name,
    onNameChange,
    saveToFirebase: saveContactFormToFirebase,
  }

  return (
    <Error courses={COURSES} isBlack contactFormParams={contactFormParams} />
  )
}

export default Error404
