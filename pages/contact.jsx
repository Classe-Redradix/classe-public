import ContactView from '../src/app/contact/Contact'

const Contact = ({ courseId }) => {
  const onContactRequestSubmit = async details => {
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
  }

  return (
    <ContactView
      onContactRequestSubmit={onContactRequestSubmit}
      courseId={courseId}
    />
  )
}

Contact.getInitialProps = async ({ query }) => {
  // if `courseId !== undefined` means that the user came here by clicking on
  // a course's `Contact us` link
  const courseId = query['course-id']

  return {
    courseId,
  }
}

export default Contact
