import { useState } from 'react'
import useInput from 'hooks/useInput'
import { useRadio } from './../hooks'
import COURSES from '../../../pages/data/courses'

/**
 * The contact forms are vary similar. Since they use almost the same fields,
 * we provide a custom hook that exposes all the contact form values, input
 * handlers and a method to store the contact form easily into Firebase.
 */
const useContactForm = (interestedInCourseId = undefined) => {
  // Form values
  const [name, onNameChange, setName] = useInput()
  const [email, onEmailChange, setEmail] = useInput()
  const [userType, onUserTypeChange, setUserType] = useRadio('company')
  const [interestedInOptions, setInterestedInOptions] = useState(
    COURSES.map(course => ({
      checked: course.id === interestedInCourseId,
      id: course.id,
      label: course.information.title,
    })),
  )

  // States to know the request status
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [error, setError] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  const onInterestedInOptionChange = interestedInOption => {
    setInterestedInOptions(interestedInOptions =>
      interestedInOptions.map(option =>
        Object.assign({}, option, {
          checked:
            option.id === interestedInOption.id
              ? !option.checked
              : option.checked,
        }),
      ),
    )
  }

  /**
   *
   * @param {Object} config - Additional config
   * @callback config.onSuccess - Executed after storing the contact details
   * @callback config.onError - Executed if the storing throws an error
   */
  const saveToFirebase = async ({ onSuccess, onError }) => {
    setIsLoading(true)

    try {
      // NOTE: newsletter is disabled for now. In the future, should appear as
      // an option in the contact form
      const contactDetails = {
        name,
        email,
        userType,
        subscribedToNewsletter: false,
        viewed: false,
        createdAt: new Date(Date.now()),
        interestedIn: interestedInOptions
          .filter(option => option.checked)
          .map(option => option.id),
      }

      await fetch('/api/contact-request', {
        method: 'post',
        body: JSON.stringify(contactDetails),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setIsSaved(true)

      const interestedInOptionsReset = interestedInOptions.map(option =>
        Object.assign({}, option, { checked: false }),
      )

      setName('')
      setEmail('')
      setUserType('company')
      setInterestedInOptions(interestedInOptionsReset)

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
    interestedInOptions,
    onInterestedInOptionChange,
  }
}

export default useContactForm
