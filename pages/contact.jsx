import ContactView from '../src/app/contact/Contact'
import MenuContact from 'ui/components/menu/MenuContact'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import COURSES from './data/courses'

const Contact = ({ courseId }) => {
  const router = useRouter()

  return (
    <MainWrapper isBlack={true}>
      <Menu
        actionText="general:go-to-home"
        handleText={() => {
          router.replace('/')
        }}
        defaultIsContactOpen={true}
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
