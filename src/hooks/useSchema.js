import useTranslations from './useTranslations'

const useSchema = () => {
  const formatMessage = useTranslations()

  const educationalOrganization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Classe',
    url: formatMessage('url:root'),
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

  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: 'https://www.classe.dev/contacto/',
    headline: 'Classe, escuela de programación',
    description:
      'Si tienes cualquier duda contacta con nosotros. Classe, Escuela especialiazada en programación en Madrid.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      name: 'Contacto',
    },
    provider: {
      '@type': 'EducationalOrganization',
      telephone: '+34910000000',
      email: 'info@clase.dev',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Calatrava, 27',
        postalCode: '28005',
        addressLocality: 'Madrid',
        addressCountry: {
          '@type': 'Country',
          name: 'España',
        },
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.41097267132999',
        longitude: '-3.712211732196113',
      },
    },
  }

  return {
    educationalOrganizationSchema: JSON.stringify(educationalOrganization),
    webSiteSchema: JSON.stringify(webSite),
    contactPageSchema: JSON.stringify(contactPage),
  }
}

export default useSchema
