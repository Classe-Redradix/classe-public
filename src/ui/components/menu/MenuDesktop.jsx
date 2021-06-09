import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'
import Cell from '../cell/Cell'

const MenuDesktop = ({ courses }) => {
  const t = useTranslations()
  const menuRef = useRef(null)
  const [isBlack, setIsBlack] = useState(false)
  const [isFluor, setIsFluor] = useState(false)
  const classes = cx('menuDesktop', {
    'is-black': isBlack,
    'is-fluor': isFluor,
  })

  const getColor = () => {
    const sectionsBlack = document.querySelectorAll('.sectionWrapper.is-black')
    const sectionsFluor = document.querySelectorAll('.sectionWrapper.is-fluor')
    const reference = menuRef.current.getBoundingClientRect().bottom

    sectionsBlack.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom

      reference > top && reference < bottom
        ? setIsBlack(true)
        : setIsBlack(false)
    })

    sectionsFluor.forEach((section) => {
      const top = section.getBoundingClientRect().top
      const bottom = section.getBoundingClientRect().bottom

      reference > top && reference < bottom
        ? setIsFluor(true)
        : setIsFluor(false)
    })
  }

  useEffect(() => {
    const mainWrapper = document.querySelector('.mainWrapper')
    mainWrapper.addEventListener('scroll', () => getColor())
    return mainWrapper.removeEventListener('scroll', () => getColor())
  }, [])

  return (
    <header className={classes} ref={menuRef}>
      <Cell>
        <span className="menuDesktop-claim menu">{t('menu:claim')}</span>
        <button
          className="menuDesktop-button menu"
          aria-label={t('menu:courses')}>
          {courses < 10
            ? `[0${courses}] ${t('menu:courses')}`
            : `${t('menu:courses')}`}
        </button>
        <button
          className="menuDesktop-button menu"
          aria-label={t('menu:contact')}>
          {t('menu:contact')}
        </button>
      </Cell>
    </header>
  )
}

export default MenuDesktop
