import InfoHead from 'InfoHead'
import Menu from 'ui/components/menu/Menu'
import MainWrapper from 'ui/components/wrappers/MainWrapper'
import { useRouter } from 'next/router'
import { COURSES } from '../data'
import {
  useContactForm,
  useKonami,
  useTranslations,
  useSchema,
  useBreadcrumbListSchema,
} from '../hooks'

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
  const { breadcrumbListSchema } = useBreadcrumbListSchema([
    { name: 'Classe, escuela de programación', url: formatMessage('url:root') },
    { name: 'Contacto', url: formatMessage('url:contact') },
  ])

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-contact:title')}
        description={formatMessage('info-head-contact:description')}
        url={formatMessage('url:contact')}
      >
        <script type="application/ld+json">
          [{`${contactPageSchema}`}, {`${breadcrumbListSchema}`}]
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
