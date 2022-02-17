import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import COURSES from './../data/courses'

const Courses = () => {
  const router = useRouter()

  return (
    <MainWrapper isBlack={true}>
      <Menu
        actionText="general:go-to-home"
        handleText={() => {
          router.replace('/')
        }}
        defaultAreCoursesOpen={true}
        isBlack={true}
        courses={COURSES}
      />
    </MainWrapper>
  )
}

export default Courses
