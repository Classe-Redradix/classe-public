import MainWrapper from '../../wrappers/MainWrapper'
import Menu from '../Menu'
import { COURSES } from '../../../../data'

export default {
  title: 'Layout/Menu',
  component: Menu,
}

export const menu = ({ ...args }) => (
  <MainWrapper>
    <Menu courses={COURSES} {...args} />
  </MainWrapper>
)
