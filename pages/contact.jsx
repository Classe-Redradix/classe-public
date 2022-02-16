import ContactView from '../src/app/contact/Contact'

const Contact = ({ courseId }) => {
  return <ContactView courseId={courseId} />
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
