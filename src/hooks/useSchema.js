import useTranslations from './useTranslations'

const useSchema = () => {
  const formatMessage = useTranslations()

  const educationalOrganization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: formatMessage('schema-educational-organization:name'),
    url: formatMessage('url:root'),
    logo: {
      '@type': 'ImageObject',
      url: formatMessage('url:logo'),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: formatMessage('schema-educational-organization:phone'),
      contactType: 'customer service',
      areaServed: formatMessage(
        'schema-educational-organization:lang-upper-case',
      ),
      availableLanguage: formatMessage('schema-educational-organization:lang'),
      url: formatMessage('url:contact'),
    },
  }

  const webSite = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    headline: formatMessage('schema-website:headline'),
    name: formatMessage('schema-website:name'),
    description: formatMessage('schema-website:description'),
    url: formatMessage('url:root'),
  }

  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: formatMessage('url:contact'),
    headline: formatMessage('schema-contact-page:headline'),
    description: formatMessage('schema-contact-page:description'),
    mainEntityOfPage: {
      '@type': 'WebPage',
      name: formatMessage('schema-contact-page:main-entity-of-page-name'),
    },
    provider: {
      '@type': 'EducationalOrganization',
      telephone: formatMessage('schema-contact-page:phone'),
      email: formatMessage('schema-contact-page:email'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: formatMessage('schema-contact-page:address'),
        postalCode: formatMessage('schema-contact-page:postal-code'),
        addressLocality: formatMessage('schema-contact-page:locality'),
        addressCountry: {
          '@type': 'Country',
          name: formatMessage('schema-contact-page:country'),
        },
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: formatMessage('schema-contact-page:latitude'),
        longitude: formatMessage('schema-contact-page:longitude'),
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
