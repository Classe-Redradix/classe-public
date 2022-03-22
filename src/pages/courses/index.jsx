import InfoHead from '../../InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'

import { MEDIA_QUERIES } from '../../../src/constants'

import { COURSES } from '../../data'
import {
  useWindowSize,
  useContactForm,
  useMenu,
  useTranslations,
  useSchema,
  useBreadcrumbListSchema,
} from '../../hooks'

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
    goToHome,
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
        goToHome={goToHome}
        openCourse={openCourse}
        isBlack={true}
        courses={COURSES}
      />
      </MainWrapper>
    </>
  )
}

export default withKonami(Courses)
