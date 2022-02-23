import COURSES from '../pages/data/courses'

import { Error } from '../ui/views'

import { useContactForm } from './hooks'

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
