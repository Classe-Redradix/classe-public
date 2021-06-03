import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Header from '../../components/header/Header'
import Manifest from '../../components/sections/Manifest'
import Courses from '../../components/sections/Courses'
import Featured from '../../components/sections/Featured'
import useTranslations from '../../../hooks/useTranslations'

export default {
  title: 'Views/Home'
}

export const home = () => {
  const t = useTranslations()
  gsap.registerPlugin(ScrambleTextPlugin)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const textWrappers = document.querySelectorAll('.scrambleTextWrapper')
    textWrappers.forEach(wrapper => {
      const text = wrapper.querySelector('.scrambleText')
      const cloned = text.cloneNode(true)
      cloned.classList.add('is-cloned')
      wrapper.appendChild(cloned)

      const lines = cloned.querySelectorAll('.line')
      lines.forEach(line => gsap.to(line, {
        duration: 1.2,
        scrambleText: {
          text: line.innerHTML,
          chars: '1234567890'
        },
        scrollTrigger: {
          scroller: '.mainWrapper',
          trigger: wrapper,
          start: 'top center'
        }
      }))
      gsap.to(lines, {
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          scroller: '.mainWrapper',
          trigger: wrapper,
          start: 'top center'
        }
      })
    })
  }, [])

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
