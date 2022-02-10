const saveContactRequest = async details => {
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

export { saveContactRequest }
