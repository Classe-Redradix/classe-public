import { COURSES } from './../../data'
import { withMenu, withKonami, COURSE_PAGE } from './../../hocs'

const Course = withKonami(({ course }) => {
  return withMenu(COURSE_PAGE, {
    course,
    useMenuConfig: {
      defaultIsCourseOpen: true,
    },
  })
})

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
