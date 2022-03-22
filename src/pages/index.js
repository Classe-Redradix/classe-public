import { useRouter } from 'next/router'
import { useState } from 'react'

import Abertis from '/public/images/logos/abertis.svg'
import Alantra from '/public/images/logos/alantra.svg'
import Anaya from '/public/images/logos/anaya.svg'
import Esa from '/public/images/logos/esa.svg'
import Gmv from '/public/images/logos/gmv.svg'
import HugoBoss from '/public/images/logos/hugo-boss.svg'
import Idealista from '/public/images/logos/idealista.svg'
import Iqvia from '/public/images/logos/iqvia.svg'
import Indra from '/public/images/logos/indra.svg'
import LifullConnect from '/public/images/logos/lifull-connect.svg'
import Masmovil from '/public/images/logos/masmovil.svg'
import Movistar from '/public/images/logos/movistar.svg'
import Santander from '/public/images/logos/santander.svg'
import Solera from '/public/images/logos/solera.svg'
import Vivanta from '/public/images/logos/vivanta.svg'

import { COURSES } from '../data'
import InfoHead from '../InfoHead'
import {
  useViewportHeight,
  useDetectMobile,
  useBackgroundChange,
  useScrambleText,
  useContactForm,
  useTranslations,
  useSchema,
  useBreadcrumbListSchema,
} from '../hooks'
import { withKonami } from '../hocs'
import { Home as HomeUI } from '../ui/views'

const Home = () => {
  const router = useRouter()
  const interestedIn = router.query['interested-in']

  const [isLock, setIsLock] = useState(false)
  const [isBlack, setIsBlack] = useState(false)
  const [isFluor, setIsFluor] = useState(false)

  const {
    email,
    onEmailChange,
    userType,
    onUserTypeChange,
    interestedInOptions,
    onInterestedInOptionChange,
    name,
    onNameChange,
    termsAndConditions,
    toggleTermsAndConditions,
    saveToFirebase: saveContactFormToFirebase,
  } = useContactForm(interestedIn)

  useViewportHeight()
  useDetectMobile()
  useBackgroundChange(setIsBlack, setIsFluor)
  useScrambleText()

  const courses = COURSES.map(course => ({
    title: course.information.title,
    href: `/courses/${course.id}`,
  }))

  const logos = [
    Santander,
    Movistar,
    Solera,
    HugoBoss,
    Gmv,
    Idealista,
    LifullConnect,
    Iqvia,
    Alantra,
    Vivanta,
    Anaya,
    Indra,
    Masmovil,
    Abertis,
    Esa,
  ]

  const fakeFaqsArray = new Array(7).fill(null)
  const faqsList = fakeFaqsArray.map(() => ({
    title: '¿Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nulla sed libero dui. Ac molestie diam egestas magnis auctor vitae. Magna scelerisque blandit sed vulputate accumsan pulvinar enim scelerisque. Malesuada.',
  }))
  const dates = [
    {
      day: '01',
      month: 'Enero',
      courses: [
        {
          title: 'Js Pro',
          start: '16',
          finish: '27',
          to: '/contact?interested-in=js-pro',
          id: 'js-pro',
        },
        {
          title: 'Data',
          start: '16',
          finish: '27',
          to: '/contact?interested-in=data',
          id: 'data',
        },
      ],
    },
    {
      day: '19',
      month: 'Agosto',
      courses: [
        {
          title: 'Redux',
          start: '16',
          finish: '27',
          to: '/contact?interested-in=redux',
          id: 'redux',
        },
      ],
    },
  ]

  const formatMessage = useTranslations()
  const { educationalOrganizationSchema, webSiteSchema } = useSchema()
  const { breadcrumbListSchema } = useBreadcrumbListSchema([
    {
      name: formatMessage('schema-breadcrumb-list:home-name'),
      url: formatMessage('url:root'),
    },
  ])

  const onContactFormSuccess = () => {
    // TODO: handle success contact saving into Firebase
  }

  const handleContactFormSubmit = event => {
    event.preventDefault()

    try {
      saveContactFormToFirebase({ onSuccess: onContactFormSuccess })
    } catch (error) {}
  }

  // NOTE: we are using a shared contact form state. If the home contact form
  // changes, so it will the modal contact form, and vice versa
  const contactFormParams = {
    email,
    onEmailChange,
    userType,
    onUserTypeChange,
    interestedInOptions,
    onInterestedInOptionChange,
    name,
    termsAndConditions,
    toggleTermsAndConditions,
    onNameChange,
    saveToFirebase: saveContactFormToFirebase,
  }

  return (
    <>
      <InfoHead
        title={formatMessage('info-head-home:title')}
        description={formatMessage('info-head-home:description')}
        url={formatMessage('url:root')}
      >
        <script type="application/ld+json">
          [ {`${educationalOrganizationSchema}`}, {`${webSiteSchema}`},{' '}
          {`${breadcrumbListSchema}`}]
        </script>
      </InfoHead>
      <HomeUI
        isBlack={isBlack}
        isFluor={isFluor}
        isLock={isLock}
        courses={COURSES}
        dates={dates}
        logos={logos}
        faqsList={faqsList}
        onContactFormSubmit={handleContactFormSubmit}
        contactFormParams={contactFormParams}
      />
    </>
  )
}

export default withKonami(Home)
