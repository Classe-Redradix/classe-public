import DatePicker from '../DatePicker'

export default {
  title: 'Atoms/Date Picker',
  component: DatePicker,
}

const dates = [
  {
    day: '01',
    month: 'Enero',
    courses: [
      {
        title: 'Js Pro',
        start: '16',
        finish: '27',
        to: '/',
        id: 'js-pro',
      },
      {
        title: 'Data',
        start: '16',
        finish: '27',
        to: '/',
        id: 'js-pro',
      },
    ],
  },
  {
    day: '19',
    month: 'Agosto',
    courses: [
      {
        title: 'Redux',
        start: '16',
        finish: '27',
        to: '/',
        id: 'redux',
      },
    ],
  },
]

export const datePicker = () => <DatePicker dates={dates} />
