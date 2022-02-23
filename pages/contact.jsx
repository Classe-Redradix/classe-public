import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import COURSES from './data/courses'
import { useContactForm } from './../src/app/hooks'

const Contact = ({ courseId }) => {
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
  } = useContactForm()

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
  // if `courseId !== undefined` means that the user came here by clicking on
  // a course's `Contact us` link
  const courseId = query['course-id']

  return {
    courseId,
  }
}

export default Contact
