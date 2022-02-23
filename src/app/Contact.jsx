import { useState } from 'react'

import { COURSES } from '../data'

import { useInput, useCheckbox } from '../hooks'

import { useContactRequest } from './hooks'

const Label = ({ children, htmlFor, ...props }) => (
  <label
    htmlFor={htmlFor}
    {...props}
    style={{
      display: 'block',
      fontWeight: 'bold',
      fontSize: '.75rem',
      marginBottom: '4px',
    }}
  >
    {children}
  </label>
)

const Contact = ({ courseId }) => {
  const { saveContactRequestToFirebase } = useContactRequest()

  const [interestedInOptions, setInterestedInOptions] = useState(
    COURSES.map(course => ({
      checked: course.id === courseId,
      id: course.id,
      label: course.information.title,
    })),
  )

  const selectedCourseExists = !!courseId
    ? !!COURSES.find(course => course.id === courseId)
    : null

  const [name, onNameChange] = useInput()
  const [email, onEmailChange] = useInput()
  const [subscribeToNewsletter, onSubscribeToNewsletterChange] = useCheckbox()

  const handleContactRequestSubmit = e => {
    e.preventDefault()

    try {
      saveContactRequestToFirebase({
        name,
        email,
        subscribeToNewsletter,
        interestedIn: interestedInOptions
          .filter(option => option.checked)
          .map(option => option.id),
      })
    } catch (error) {}
  }

  const handleInterestedInOptionChange = interestedInOption => {
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

  return (
    <section
      style={{
        maxWidth: 500,
        margin: '2rem auto',
      }}
    >
      <h1>Contact</h1>
      {!!courseId ? (
        selectedCourseExists ? (
          <p>Selected course: {courseId}</p>
        ) : (
          <p>Selected course ({courseId}) doesn't exists</p>
        )
      ) : null}
      <form onSubmit={handleContactRequestSubmit}>
        <div>
          <Label htmlFor="name">Name and surname</Label>
          <input type="text" name="name" value={name} onChange={onNameChange} />
        </div>
        <div>
          {interestedInOptions.map(interestedInOption => (
            <div key={interestedInOption.id}>
              <label htmlFor={interestedInOption.id}>
                {interestedInOption.label}
              </label>
              <input
                type="checkbox"
                name={interestedInOption.id}
                id={interestedInOption.id}
                checked={interestedInOption.checked}
                onChange={() =>
                  handleInterestedInOptionChange(interestedInOption)
                }
              />
            </div>
          ))}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="subscribeToNewsletter"
            value={subscribeToNewsletter}
            onChange={onSubscribeToNewsletterChange}
          />
          <label htmlFor="subscribeToNewsletter">Subscribe to newsletter</label>
        </div>
        <button>Send!</button>
      </form>
    </section>
  )
}

export default Contact
