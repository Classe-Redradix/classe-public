import { useState, useEffect, useCallback, useRef } from 'react'
import useTranslations from './useTranslations'

export default function useKonami() {
  const formatMessage = useTranslations()

  const [konamiCode, setIsKonami] = useState(false)
  const refIndex = useRef(0)

  const showDiscountCodeInConsole = () => {
    console.log(formatMessage('konami:congrats'))
    console.log(formatMessage('konami:unlock-discount'))
    console.log(formatMessage('konami:use-it-1'))
    console.log(formatMessage('konami:use-it-2'))
    console.log(formatMessage('konami:how-to'), 'color: yellow')
    console.log(formatMessage('konami:example'), 'color: yellow')
  }

  const onKeyUpCallback = useCallback(e => {
    const codes = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ]
    const onKeyUp = ({ key }) => {
      if (refIndex.current === codes.length - 1) {
        setIsKonami(true)
        showDiscountCodeInConsole()
      }
      if (
        key != null &&
        codes[refIndex.current] != null &&
        key.toLowerCase() === codes[refIndex.current].toLowerCase()
      ) {
        refIndex.current++
      } else {
        refIndex.current = 0
        setIsKonami(false)
      }
    }
    onKeyUp(e)
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', onKeyUpCallback)
    return () => {
      window.removeEventListener('keyup', onKeyUpCallback)
    }
  }, [onKeyUpCallback])

  return [konamiCode, setIsKonami]
}
