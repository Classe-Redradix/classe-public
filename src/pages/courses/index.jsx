import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../../data'
import { useContactForm, useMenu, useKonami } from '../../hooks'

const Courses = () => {
  const router = useRouter()

  useKonami()

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
            router.replace('/courses')
            openCourses()
          } else {
            router.replace('/')
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

export default Courses
