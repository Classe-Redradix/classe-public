import { useCallback } from 'react'
import { useIntl } from 'react-intl'
// we import translations to force Storybook refresh when editing translation .json files
// eslint-disable-next-line no-unused-vars
import translations from '../config/translations'

const useTranslations = () => {
  const intl = useIntl()

  const t = useCallback(
    (key, values = {}) =>
      intl.formatMessage({ id: key, defaultMessage: key }, values),
    [intl],
  )

  return t
}

export default useTranslations
