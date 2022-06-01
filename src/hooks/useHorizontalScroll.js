import { useRef, useEffect } from 'react'

const useHorizontalScroll = () => {
  const elRef = useRef()

  useEffect(() => {
    const el = elRef.current
    const titleItem = document.querySelector('.courseTitle-header')
    const widthIntro = document.querySelector('.courseIntro').offsetWidth
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        })

        if (el.scrollLeft >= widthIntro) {
          titleItem.classList.add('is-visible')
        } else {
          titleItem.classList.remove('is-visible')
        }
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])
  return elRef
}

export default useHorizontalScroll
