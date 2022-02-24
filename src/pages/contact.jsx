import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../data'
import { useContactForm } from '../hooks'

const Contact = ({ interestedIn }) => {
  const router = useRouter()
  const {
    email,
    onEmailChange,
    name,
    onNameChange,
    userType,
    onUserTypeChange,
    saveToFirebase,
    interestedInOptions,
    onInterestedInOptionChange,
  } = useContactForm(interestedIn)

  const contactFormParams = {
    email,
    onEmailChange,
    name,
    onNameChange,
    userType,
    onUserTypeChange,
    saveToFirebase,
    interestedInOptions,
    onInterestedInOptionChange,
  }

  return (
    <MainWrapper isBlack={true}>
      <Menu
        actionText="general:go-to-home"
        contactFormParams={contactFormParams}
        handleText={() => {
          router.replace('/')
        }}
        isContactOpen={true}
        isBlack={true}
        courses={COURSES}
      />
    </MainWrapper>
  )
}

Contact.getInitialProps = async ({ query }) => {
  // if `interestedIn !== undefined` means that the user came here by clicking on
  // a course's `Contact us` link
  const interestedIn = query['interested-in']

  return {
    interestedIn,
  }
}

export default Contact
