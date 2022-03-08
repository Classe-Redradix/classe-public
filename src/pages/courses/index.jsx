import InfoHead from 'InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../../data'
import {
  useContactForm,
  useMenu,
  useKonami,
  useSchema,
  useTranslations,
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

  const actionText = isCourseOpen ? 'menu:close' : 'general:go-to-home'

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-courses:title')}
        description={formatMessage('info-head-courses:description')}
        url={formatMessage('info-head-courses:url')}
      >
        <script type="application/ld+json">
          [{`${educationalOrganizationSchema}`},
          {`{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "name": "Classe, escuela de programación",
              "position": "1",
              "item": {
                "@type": "Thing",
                "@id": "https://clase.dev/"
              }
            },
            {
              "@type": "ListItem",
              "name": "Cursos",
              "position": "2",
              "item": {
                "@type": "Thing",
                "@id": "https://clase.dev/cursos"
              }
            }]
          }`}
          ]
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
