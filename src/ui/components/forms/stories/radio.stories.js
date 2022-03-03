import Radio from '../Radio'

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Empresa',
      control: {
        type: 'text',
      },
    },
    isChecked: {
      name: 'isChecked',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
}

export const radio = ({ ...args }) => (
  <Radio onChange={() => {}} name="" value="" id="" {...args} />
)

radio.parameters = {
  options: {
    showPanel: true,
  },
}
