import Error from './Error'
import useScrambleText from '../../../hooks/useScrambleText'
import COURSES from '../../../pages/data/courses'

export default {
  title: 'Views/Error',
  component: Error,
}

export const error = () => {
  useScrambleText()

  return <Error isBlack courses={COURSES} />
}
