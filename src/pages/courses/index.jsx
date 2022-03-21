import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../../data'
import { useContactForm, useMenu } from '../../hooks'
import withKonami from './../../with-konami'

const Courses = () => {
  const router = useRouter()

  const {
    openCourse,
    isCourseOpen,
    areCoursesOpen,
    course,
    openCourses,
    openContact,
    isContactOpen,
  } = useMenu({
    defaultAreCoursesOpen: true,
  })

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
  } = useContactForm(course?.id)

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

  const actionText = isCourseOpen ? 'menu:close' : 'general:go-to-home'

  return (
    <MainWrapper isBlack={true}>
      <Menu
        actionText={actionText}
        contactFormParams={contactFormParams}
        handleText={() => {
          if (isCourseOpen) {
            router.push('/courses')
            openCourses()
          } else {
            router.push('/')
          }
        }}
        isContactOpen={isContactOpen}
        openContact={openContact}
        areCoursesOpen={areCoursesOpen}
        isCourseOpen={isCourseOpen}
        course={course}
        openCourse={openCourse}
        isBlack={true}
        courses={COURSES}
      />
    </MainWrapper>
  )
}

export default withKonami(Courses)
