import React, { useState } from 'react'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Menu from '../../components/menu/Menu'
import Header from '../../components/header/Header'
import Manifest from '../../components/sections/Manifest'
import Courses from '../../components/sections/Courses'
import Custom from '../../components/sections/Custom'
import Featured from '../../components/sections/Featured'
import Calendar from '../../components/sections/Calendar'
import Companies from '../../components/sections/Companies'
import Faqs from '../../components/sections/Faqs'
import Find from '../../components/sections/Find'
import useTranslations from '../../../hooks/useTranslations'
import useViewportHeight from '../../../hooks/useViewportHeight'
import useDetectMobile from '../../../hooks/useDetectMobile'
import useScrambleText from '../../../hooks/useScrambleText'
import CompanyLogo from '../../../assets/images/demo-company.svg'

export default {
  title: 'Views/Home'
}

export const home = () => {
  const t = useTranslations()
  const [isLock, setIsLock] = useState(false)
  useViewportHeight()
  useDetectMobile()
  useScrambleText()

  const courses = [
    {
      title: 'Js pro',
      href: '/'
    }, {
      title: 'React',
      href: '/'
    }, {
      title: 'Redux',
      href: '/'
    }, {
      title: 'Data',
      href: '/'
    }
  ]

  const fakeLogosArray = new Array(15).fill(null)
  const logos = fakeLogosArray.map(() => <CompanyLogo viewBox="0 0 125 45" />)

  const fakeFaqsArray = new Array(7).fill(null)
  const faqsList = fakeFaqsArray.map(() => ({
    title: '¿Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nulla sed libero dui. Ac molestie diam egestas magnis auctor vitae. Magna scelerisque blandit sed vulputate accumsan pulvinar enim scelerisque. Malesuada.'
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
          to: '/'
        }, {
          title: 'Data',
          start: '16',
          finish: '27',
          to: '/'
        }
      ]
    }, {
      day: '19',
      month: 'Agosto',
      courses: [
        {
          title: 'Redux',
          start: '16',
          finish: '27',
          to: '/'
        }
      ]
    }
  ]

  return (
    <MainWrapper isLock={isLock}>
      <Menu courses={courses} onToggle={setIsLock} />
      <div className="blurableWrapper">
        <Header title={t('manifest:header')} number={1} />
        <Manifest />
        <Header isClose title={t('manifest:header')} />
        <Header title={t('courses:header')} number={2} />
        <Courses courses={courses} />
        <Header isClose title={t('courses:header')} />
        <Header title={t('custom:header')} number={3} />
        <Custom />
        <Header isClose title={t('custom:header')} />
        <Header title={t('featured:header')} number={4} />
        <Featured />
        <Header isClose title={t('featured:header')} />
        <Header title={t('facts:header')} number={5} />
        <Header isClose title={t('facts:header')} />
        <Header title={t('calendar:header')} number={6} />
        <Calendar dates={dates} />
        <Header isClose title={t('calendar:header')} />
        <Header title={t('companies:header')} number={7} />
        <Companies logos={logos} />
        <Header isClose title={t('companies:header')} />
        <Header title={t('faqs:header')} number={8} />
        <Faqs list={faqsList} />
        <Header isClose title={t('faqs:header')} />
        <Header title={t('find:header')} number={9} />
        <Find />
        <Header isClose title={t('find:header')} />
        <Header title={t('footer:header')} number={10} />
        <Header isClose title={t('footer:header')} />
      </div>
    </MainWrapper>
  )
}
