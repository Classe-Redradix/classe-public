import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

const useMenu = ({
  defaultIsContactOpen = false,
  defaultAreCoursesOpen = false,
  defaultIsCourseOpen = false,
  defaultCourse = null,
} = {}) => {
  const router = useRouter()

  const [isContactOpen, setIsContactOpen] = useState(defaultIsContactOpen)
  const [areCoursesOpen, setAreCoursesOpen] = useState(defaultAreCoursesOpen)
  const [isCourseOpen, setIsCourseOpen] = useState(defaultIsCourseOpen)
  const [course, setCourse] = useState(defaultCourse)

  const handleCoursesOpen = () => {
    setIsContactOpen(false)
    setIsCourseOpen(false)
    setAreCoursesOpen(true)

    router.replace(router.pathname, '/courses')
  }

  const handleContactOpen = () => {
    setAreCoursesOpen(false)
    setIsCourseOpen(false)
    setIsContactOpen(true)

    router.replace(router.pathname, '/contact')
  }

  const handleCourseOpen = _course => {
    setAreCoursesOpen(false)
    setIsContactOpen(false)
    setIsCourseOpen(true)
  }

  const handleClose = () => {
    setIsContactOpen(false)
    setAreCoursesOpen(false)
    setIsCourseOpen(false)

    router.replace('/')
  }

  const openCourse = useCallback(
    course => {
      setAreCoursesOpen(false)
      setIsCourseOpen(true)
      setCourse(course)

      router.replace(router.pathname, course.href)
    },
    [course],
  )

  return {
    isContactOpen,
    areCoursesOpen,
    isCourseOpen,
    course,
    handleCoursesOpen,
    handleCourseOpen,
    handleContactOpen,
    handleClose,
    openCourse,
  }
}

export default useMenu
