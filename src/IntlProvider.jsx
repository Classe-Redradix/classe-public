import React from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { setupI18n } from 'libs/i18n'

export const IntlAppProvider = ({ children }) => {
  const { locale: nextLocale } = useRouter()
  const { messages, locale } = setupI18n(nextLocale)

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  )
}

IntlAppProvider.propTypes = {
  children: PropTypes.node,
}

export default IntlAppProvider
