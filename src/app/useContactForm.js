import { useState } from 'react'
import useInput from 'hooks/useInput'
import useRadio from 'app/useRadio'

/**
 * The contact forms are vary similar. Since they use almost the same fields,
 * we provide a custom hook that exposes all the contact form values, input
 * handlers and a method to store the contact form easily into Firebase.
 */
const useContactForm = () => {
  // Form values
  const [name, onNameChange] = useInput()
  const [email, onEmailChange] = useInput()
  const [userType, onUserTypeChange] = useRadio('company')

  // States to know the request status
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [error, setError] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  /**
   *
   * @param {Object} config - Additional config
   * @callback config.onSuccess - Executed after storing the contact details
   * @callback config.onError - Executed if the storing throws an error
   */
  const saveToFirebase = async ({ onSuccess, onError }) => {
    setIsLoading(true)

    try {
      const contactDetails = {
        name,
        email,
        userType,
        createdAt: new Date(Date.now()),
        viewed: false,
      }

      await fetch('/api/contact-request', {
        method: 'post',
        body: JSON.stringify(contactDetails),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setIsSaved(true)

      if (onSuccess !== undefined) {
        onSuccess()
      }
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
    saveToFirebase,
    name,
    onNameChange,
    email,
    onEmailChange,
    userType,
    onUserTypeChange,
  }
}

export default useContactForm
