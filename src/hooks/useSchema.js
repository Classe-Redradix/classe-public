import useTranslations from './useTranslations'

const useSchema = () => {
  const formatMessage = useTranslations()

  const educationalOrganization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Classe',
    url: formatMessage('url-root'),
    logo: {
      '@type': 'ImageObject',
      url: 'https:classe.dev/images/logo.png',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34910000000',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: 'es',
      url: 'https://classe.dev/contacto',
    },
  }

  const webSite = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    headline: 'Classe, escuela de programación',
    name: 'Classe, escuela de programación',
    description:
      'Classe, escuela de programación para dar el salto en tu carrera profesional.',
    url: 'https://classe.dev',
  }

  return {
    educationalOrganizationSchema: JSON.stringify(educationalOrganization),
    webSiteSchema: JSON.stringify(webSite),
  }
}

export default useSchema
