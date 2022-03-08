import useTranslations from './useTranslations'

const formatDate = str => {
  const date = str.split('.')
  const day = date.slice(0, 1)[0]
  const month = date.slice(1, 2)[0]
  const year = date.slice(2, 3)[0]

  return `20${year}-${month}-${day}`
}

const useCoursechema = courseData => {
  const formatMessage = useTranslations()

  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    url: `${formatMessage('url-root')}${courseData.href}`,
    name: courseData.information.title,
    description: courseData.information.description,
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        startDate: `${formatDate(courseData.information.start)}`,
        endDate: `${formatDate(courseData.information.finish)}`,
        offers: {
          '@type': 'Offer',
          price: courseData.information.price,
          priceCurrency: 'EUR',
        },
      },
    ],
  }

  return {
    courseSchema: JSON.stringify(course),
  }
}

export default useCoursechema
