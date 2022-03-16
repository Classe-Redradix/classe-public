import InfoHead from '../../InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES, MEDIA_QUERIES } from '../../data'
import {
  useWindowSize,
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
    {
      name: formatMessage('schema-breadcrumb-list:home-name'),
      url: formatMessage('url:root'),
    },
    {
      name: formatMessage('schema-breadcrumb-list:courses-name'),
      url: formatMessage('url:courses'),
    },
  ])

  const actionText = isCourseOpen ? 'menu:close' : 'general:go-to-home'

  const size = useWindowSize()
  const isDesktop = size.width >= MEDIA_QUERIES.desktop

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-courses:title')}
        description={formatMessage('info-head-courses:description')}
        url={formatMessage('url:courses')}
      >
        <script type="application/ld+json">
          [{`${educationalOrganizationSchema}`}, {`${breadcrumbListSchema}`}]
        </script>
      </InfoHead>

      <MainWrapper isBlack={true}>
        {isDesktop ? (
          <h1 className="sr-only">{formatMessage('courses:header')}</h1>
        ) : null}
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
