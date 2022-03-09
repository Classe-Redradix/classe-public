const useBreadcrumbListSchema = (list, course) => {
  const breadcrumbList = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: list.map((item, index) => {
      return {
        '@type': 'ListItem',
        name: item.name,
        position: index + 1,
        item: {
          '@type': 'Thing',
          '@id': item.url,
        },
      }
    }),
  }

  return {
    breadcrumbListSchema: JSON.stringify(breadcrumbList),
  }
}

export default useBreadcrumbListSchema
