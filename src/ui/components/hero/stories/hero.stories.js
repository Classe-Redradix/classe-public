import Hero from '../Hero'

export default {
  title: 'Layout/Hero',
  component: Hero,
  args: {
    text: 'Class[e]',
  },
  parameters: {
    options: {
      showPanel: true,
    },
  },
}

export const hero = ({ ...args }) => <Hero {...args} />
