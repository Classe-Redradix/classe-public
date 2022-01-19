import { addDecorator, addParameters } from '@storybook/react'
import withIntl from './addons/intl/withIntl'
import { registerIcon } from '../src/styleguide/styleguide-config'
import '!style-loader!css-loader!sass-loader!../src/assets/stylesheets/style.scss'

const iconReq = require.context(
  '!raw-loader!../src/assets/icons/',
  true,
  /.svg$/,
)

iconReq
  .keys()
  .forEach(icon =>
    registerIcon(
      icon.replace('./', '').replace('.svg', ''),
      iconReq(icon).default,
    ),
  )

addDecorator(withIntl)

addParameters({
  layout: 'fullscreen',
  options: {
    showPanel: false,
  },
})

export const parameters = { layout: 'fullscreen' }
