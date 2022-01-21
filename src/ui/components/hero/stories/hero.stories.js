import Hero from '../Hero'

export default {
  title: 'Layout/Hero',
  component: Hero,
  // argTypes: {
  //   isClose: {
  //     name: 'isClose',
  //     defaultValue: false,
  //     control: {
  //       type: 'boolean',
  //     },
  //   },
  //   number: {
  //     name: 'number',
  //     defaultValue: 1,
  //     control: {
  //       type: 'number',
  //     },
  //   },
  //   title: {
  //     name: 'title',
  //     defaultValue: 'Manifiesto',
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
}

export const hero = ({ ...args }) => <Hero {...args} />

hero.parameters = {
  options: {
    showPanel: true,
  },
}
