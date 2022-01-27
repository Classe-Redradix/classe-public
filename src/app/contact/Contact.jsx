import useQueryParams from '../../hooks/useQueryParams'
import COURSES from './../../../pages/courses/courses'

const Contact = () => {
  const courseId = useQueryParams('course-id')

  const selectedCourseExists = !!courseId
    ? !!COURSES.find(course => course.id === courseId)
    : null

  return (
    <section
      style={{
        maxWidth: 500,
        margin: '2rem auto',
      }}
    >
      <h1>Contact</h1>
      {!!courseId ? (
        selectedCourseExists ? (
          <p>Selected course: {courseId}</p>
        ) : (
          <p>Selected course ({courseId}) doesn't exists</p>
        )
      ) : null}
    </section>
  )
}

export default Contact
