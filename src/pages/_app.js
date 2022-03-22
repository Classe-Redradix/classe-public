import IntlAppProvider from '../IntlProvider'
import './../styles/globals.css'
import './../assets/stylesheets/style.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker
          .register('sw.js', {
            scope: '.',
          })
          .then(
            function (registration) {
              console.log(
                'Service Worker registration successful with scope: ',
                registration.scope,
              )
            },
            function (err) {
              console.log('Service Worker registration failed: ', err)
            },
          )
      })
    }
  }, [])

  return (
    <IntlAppProvider>
      <Component {...pageProps} />
    </IntlAppProvider>
  )
}

export default MyApp
