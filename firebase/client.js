import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: String(process.env.MESSAGING_SENDER_ID),
  appId: process.env.APP_ID,
}

// Initialize the app only if there's no previous instance of it. This is to
// prevent live reloading errors during development
getApps().length === 0 && initializeApp(config)

const firestore = getFirestore()

/**
 *
 * @param { Object } details Contact details
 * @param { string } details.name - User name
 * @param { string[] } details.interestedIn - Things that the user is interested in
 * @param { string } details.email - User email
 * @param { string } details.subscribeToNewsletter - Specify if the user wants to enroll to the newsletter
 * @param { boolean } details.viewed - Indicate if the request has been seen in the dashboard (always false)
 * @param { Date } details.createdAt - Date when the request has been created
 *
 * @returns a promise with the contact request result
 */
const saveContactRequest = details => {
  const contactRequestRef = doc(collection(firestore, 'contactRequests'))

  setDoc(contactRequestRef, details)
}

export { saveContactRequest }
