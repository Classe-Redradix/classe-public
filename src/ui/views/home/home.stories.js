import React from 'react'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Header from '../../components/header/Header'
import Manifest from '../../components/sections/Manifest'
import Courses from '../../components/sections/Courses'
import Featured from '../../components/sections/Featured'
import useTranslations from '../../../hooks/useTranslations'
import useScrambleText from '../../../hooks/useScrambleText'

export default {
  title: 'Views/Home'
}

export const home = () => {
  const t = useTranslations()
  useScrambleText()

  return (
    <MainWrapper>
      <Header title={t('manifest:header')} number={1} />
      <Manifest />
      <Header isClose title={t('manifest:header')} />
      <Header title={t('courses:header')} number={2} />
      <Courses />
      <Header isClose title={t('courses:header')} />
      <Header title={t('custom:header')} number={3} />
      <Header isClose title={t('custom:header')} />
      <Header title={t('featured:header')} number={4} />
      <Featured />
      <Header isClose title={t('featured:header')} />
      <Header title={t('facts:header')} number={5} />
      <Header isClose title={t('facts:header')} />
      <Header title={t('calendar:header')} number={6} />
      <Header isClose title={t('calendar:header')} />
      <Header title={t('companies:header')} number={7} />
      <Header isClose title={t('companies:header')} />
      <Header title={t('faqs:header')} number={8} />
      <Header isClose title={t('faqs:header')} />
      <Header title={t('find:header')} number={9} />
      <Header isClose title={t('find:header')} />
      <Header title={t('footer:header')} number={10} />
      <Header isClose title={t('footer:header')} />
    </MainWrapper>
  )
}
