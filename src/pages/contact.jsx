import InfoHead from 'InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { INFO_HEAD, COURSES } from '../data'
import { useContactForm, useKonami } from '../hooks'

const Contact = ({ interestedIn }) => {
  const router = useRouter()

  useKonami()

  const {
    email,
    onEmailChange,
    name,
    onNameChange,
    userType,
    onUserTypeChange,
    saveToFirebase,
    interestedInOptions,
    onInterestedInOptionChange,
  } = useContactForm(interestedIn)

  const contactFormParams = {
    email,
    onEmailChange,
    name,
    onNameChange,
    userType,
    onUserTypeChange,
    saveToFirebase,
    interestedInOptions,
    onInterestedInOptionChange,
  }

  return (
    <>
      <InfoHead
        title={INFO_HEAD.CONTACT.title}
        description={INFO_HEAD.CONTACT.description}
        url={INFO_HEAD.CONTACT.url}
      >
        <script type="application/ld+json">
          [
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://www.classe.dev/contacto/",
            "headline": "Classe, escuela de programación",
            "description": "Si tienes cualquier duda contacta con nosotros. Classe, Escuela especialiazada en programación en Madrid.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "name": "Contacto"
            },
            "provider": {
              "@type": "EducationalOrganization",
              "telephone": "+34910000000",
              "email": "info@clase.dev",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Calatrava, 27",
                "postalCode": "28005",
                "addressLocality": "Madrid",
                "addressCountry": {
                  "@type": "Country",
                  "name": "España"
                }
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.41097267132999",
                "longitude": "-3.712211732196113"
              }
            }
          }
         `}
          ,
          {`{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "name": "Classe, escuela de programación",
              "position": "1",
              "item": {
                "@type": "Thing",
                "@id": "https://clase.dev/"
              }
            },
            {
              "@type": "ListItem",
              "name": "Contacto",
              "position": "2",
              "item": {
                "@type": "Thing",
                "@id": "https://clase.dev/contacto"
              }
            }]
          }`}
          ]
        </script>
      </InfoHead>
      <MainWrapper isBlack={true}>
        <Menu
          actionText="general:go-to-home"
          contactFormParams={contactFormParams}
          handleText={() => {
            router.replace('/')
          }}
          isContactOpen={true}
          isBlack={true}
          courses={COURSES}
        />
      </MainWrapper>
    </>
  )
}

Contact.getInitialProps = async ({ query }) => {
  // if `interestedIn !== undefined` means that the user came here by clicking on
  // a course's `Contact us` link
  const interestedIn = query['interested-in']

  return {
    interestedIn,
  }
}

export default Contact
