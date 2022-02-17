import COURSES from './../data/courses'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import Menu from 'ui/components/menu/Menu'
import { useRouter } from 'next/router'

const Course = ({ course }) => {
  const router = useRouter()

  return (
    <MainWrapper isBlack={true}>
      <Menu
        actionText="general:go-to-home"
        handleText={() => {
          router.replace('/')
        }}
        defaultCourse={course}
        defaultIsCourseOpen={true}
        isBlack={true}
        courses={COURSES}
      />
    </MainWrapper>
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
