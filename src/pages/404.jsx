import { COURSES } from '../data'
import { withKonami } from '../hocs'
import { useContactForm } from '../hooks'
import { Error } from '../ui/views'

const Error404 = () => {
  const {
    email,
    onEmailChange,
    userType,
    onUserTypeChange,
    interestedInOptions,
    onInterestedInOptionChange,
    name,
    errors,
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
    errors,
    onNameChange,
    saveToFirebase: saveContactFormToFirebase,
  }

  return (
    <Error courses={COURSES} isBlack contactFormParams={contactFormParams} />
  )
}

export default withKonami(Error404)
