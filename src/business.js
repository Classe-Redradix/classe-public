/*
 * Copy Classe's email to the clipboard using the `navigator.clipboard` API.
 * */
const copyClasseEmailToClipboard = () => {
  // NOTE: we can use the `navigator.clipboard` API because when
  // the user clicks on the email, the document is focused.
  // If we try to `navigator.clipboard.writeText('hello')`
  // directly on the browser's console, we would get and error if
  // the document is not focused.
  navigator.clipboard.writeText('info@classe.com')

  // TODO: show better feedback, don't use `alert`. Maybe we could pass a
  // callback as param to handle this event when it's completed'
  // NOTE: we have to add the alert inside a `setTimeout` because if we don't
  // do it, we loose the document focus and throws an error indicating it
  // (`Uncaught (in promise) DOMException: Document is not focused.`)
  setTimeout(() => alert('Email copied!'), 100)
}

export { copyClasseEmailToClipboard }
