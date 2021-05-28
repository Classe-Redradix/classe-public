import React from 'react'
import { IntlProvider } from 'react-intl'
import { setupI18n } from '../../../src/libs/i18n'
import translations from '../../../src/config/translations'
import { select } from '@storybook/addon-knobs'

export default Story => {
  const languages = Object.keys(translations)
  const languageOptions = languages.reduce(
    (acc, key) => {
      acc[key] = key
      return acc
    },
    {},
  )
  const language = select('Language', languageOptions, languages[0])

  const { messages, locale } = setupI18n(language)

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      textComponent={React.Fragment}
    >
      <Story />
    </IntlProvider>
  )
}
