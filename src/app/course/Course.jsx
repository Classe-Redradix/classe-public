import CourseUI from 'ui/views/course/Course'
import COURSES from '../../../pages/data/courses'

const courses = COURSES.map(course => ({
  title: course.information.title,
  href: `/courses/${course.id}`,
}))

const dates = [
  {
    day: '01',
    month: 'Enero',
    courses: [
      {
        title: 'Próxima convocatoria',
        start: '16.01.21',
        finish: '27.02.21',
        to: '/',
      },
    ],
  },
]

const Course = ({ course }) => {
  const { information } = course

  return (
    <CourseUI
      isBlack
      courses={courses}
      dates={dates}
      name={information.title}
      title="objetivosd"
    />
  )
}

export default Course
