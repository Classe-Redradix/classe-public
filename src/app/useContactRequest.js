import { useState } from 'react'

const useContactRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [error, setError] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  const saveContactRequestToFirebase = async details => {
    setIsLoading(true)

    try {
      const createdAt = new Date(Date.now())
      const contactRequest = Object.assign({}, details, {
        createdAt,
        viewed: false,
      })

      await fetch('/api/contact-request', {
        method: 'post',
        body: JSON.stringify(contactRequest),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setIsSaved(true)
    } catch (error) {
      setIsError(true)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    isSaved,
    isError,
    error,
    saveContactRequestToFirebase,
  }
}

export default useContactRequest
