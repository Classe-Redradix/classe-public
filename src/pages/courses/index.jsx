import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../../data'
import { useMenu } from '../../hooks'

const Courses = () => {
  const router = useRouter()
  const { openCourse, isCourseOpen, areCoursesOpen, course, openCourses } =
    useMenu({
      defaultAreCoursesOpen: true,
    })

  const actionText = isCourseOpen ? 'menu:close' : 'general:go-to-home'

  return (
    <MainWrapper isBlack={true}>
      <Menu
        actionText={actionText}
        handleText={() => {
          if (isCourseOpen) {
            router.replace('/courses')
            openCourses()
          } else {
            router.replace('/')
          }
        }}
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
