import { useRouter } from 'next/router'

/**
 * Gets the query param value given a query param name.
 *
 * @param { string } queryParamName
 * @returns The query param value. If the query param doesn't exist, returns
 * `undefined`.
 *
 * @example
 *  /// URL: https://classe.dev/contact?course-id=react
 *  const courseId = useQueryParams('course-id') // "react"
 */
const useQueryParams = queryParamName => {
  const { query } = useRouter()

  return query[queryParamName]
}

export default useQueryParams
