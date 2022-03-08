import InfoHead from 'InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../data'
import { useContactForm, useKonami, useSchema, useTranslations } from '../hooks'

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

  const formatMessage = useTranslations()
  const { contactPageSchema } = useSchema()

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-contact:title')}
        description={formatMessage('info-head-contact:description')}
        url={formatMessage('info-head-contact:url')}
      >
        <script type="application/ld+json">
          [ {`${contactPageSchema}`},
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
