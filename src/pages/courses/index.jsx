import InfoHead from 'InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../../data'
import {
  useContactForm,
  useMenu,
  useKonami,
  useTranslations,
  useSchema,
  useBreadcrumbListSchema,
} from '../../hooks'

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

  const formatMessage = useTranslations()
  const { educationalOrganizationSchema } = useSchema()
  const { breadcrumbListSchema } = useBreadcrumbListSchema([
    { name: 'Classe, escuela de programación', url: 'https://clase.dev/' },
    { name: 'Cursos', url: 'https://clase.dev/cursos' },
  ])

  const actionText = isCourseOpen ? 'menu:close' : 'general:go-to-home'

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-courses:title')}
        description={formatMessage('info-head-courses:description')}
        url={formatMessage('info-head-courses:url')}
      >
        <script type="application/ld+json">
          [{`${educationalOrganizationSchema}`}, {`${breadcrumbListSchema}`}]
        </script>
      </InfoHead>

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
    </>
  )
}

export default Courses
