import { COURSES_PAGE, applyHocs, withKonami, withMenu } from './../../hocs'

const Courses = () =>
  withMenu(COURSES_PAGE, {
    useMenuConfig: { defaultAreCoursesOpen: true },
  })

export default withKonami(Courses)
