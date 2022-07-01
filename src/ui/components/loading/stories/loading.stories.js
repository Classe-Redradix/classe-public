import MainWrapper from '../../wrappers/MainWrapper'
import Loading from '../Loading'

export default {
  title: 'Layout/Loading',
  component: Loading,
  argTypes: {
    isClose: {
      name: 'isClose',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    number: {
      name: 'number',
      defaultValue: 1,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    title: {
      name: 'title',
      defaultValue: 'Loading',
      control: {
        type: 'text',
      },
    },
  },
}

export const loading = ({ ...args }) => (
  <MainWrapper>
    <Loading {...args} />
  </MainWrapper>
)

loading.parameters = {
  options: {
    showPanel: true,
  },
}
