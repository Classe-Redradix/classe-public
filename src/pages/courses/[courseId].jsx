import InfoHead from '../../InfoHead'
import { useRouter } from 'next/router'

import { COURSES } from './../../data'
import {
  useKonami,
  useTranslations,
  useCoursechema,
  useEducationalEventchema,
  useBreadcrumbListSchema,
} from './../../hooks'
import MainWrapper from './../../ui/components/wrappers/MainWrapper'
import Menu from './../../ui/components/menu/Menu'

const Course = ({ course }) => {
  const router = useRouter()

  useKonami()

  const formatMessage = useTranslations()
  const { courseSchema } = useCoursechema(course)
  const { educationalEventSchema } = useEducationalEventchema(course)
  const { breadcrumbListSchema } = useBreadcrumbListSchema([
    {
      name: formatMessage('schema-breadcrumb-list:home-name'),
      url: formatMessage('url:root'),
    },
    {
      name: formatMessage('schema-breadcrumb-list:courses-name'),
      url: formatMessage('url:courses'),
    },
    {
      name: course.information.title,
      url: formatMessage('url:course', {
        course: course.href,
      }),
    },
  ])

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-course:title', {
          course: course.information.title,
        })}
        description={course.information.description}
        url={formatMessage('url:course', {
          course: course.href,
        })}
      >
        <script type="application/ld+json">
          [{`${courseSchema}`}, {`${educationalEventSchema}`},{' '}
          {`${breadcrumbListSchema}`}]
        </script>
      </InfoHead>
      <MainWrapper isBlack={true}>
        <Menu
          actionText="general:go-to-home"
          handleText={() => {
            router.replace('/')
          }}
          openContact={() =>
            // HACK: in the course page, we force the app to redirect to the
            // contact page directly instead of opening it as a modal.
            // This is because the route that would be displayed is not
            // compatible with the url (https://nextjs.org/docs/messages/incompatible-href-as)
            // If we find a way to make it compatible, then we should use the
            // `useMenu` and `useContactForm` hooks and pass all their values to
            // the `Menu` component, like in `src/pages/courses/index.jsx`
            router.replace(`/contact?interested-in=${course.id}`)
          }
          course={course}
          isCourseOpen={true}
          isBlack={true}
          courses={COURSES}
        />
      </MainWrapper>
    </>
  )
}

export async function getStaticPaths() {
  const paths = COURSES.map(course => ({
    params: { courseId: course.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const course = COURSES.find(course => course.id === params.courseId)

  return {
    props: { course },
  }
}

export default Course
