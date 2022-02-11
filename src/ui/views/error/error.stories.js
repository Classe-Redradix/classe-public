import Error from './Error'
import useScrambleText from '../../../hooks/useScrambleText'

export default {
  title: 'Views/Error',
  component: Error,
}

const courses = [
  {
    title: 'Js pro',
    href: '/',
  },
  {
    title: 'React',
    href: '/',
  },
  {
    title: 'Redux',
    href: '/',
  },
  {
    title: 'Data',
    href: '/',
  },
]

export const error = () => {
  useScrambleText()

  return <Error isBlack courses={courses} />
}
