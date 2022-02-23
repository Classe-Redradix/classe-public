import Error from './Error'
import useScrambleText from '../../../hooks/useScrambleText'
import { COURSES } from '../../../data'

export default {
  title: 'Views/Error',
  component: Error,
}

export const error = () => {
  useScrambleText()

  return <Error isBlack courses={COURSES} />
}
