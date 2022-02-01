import IntlAppProvider from 'app/IntlProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <IntlAppProvider>
      <Component {...pageProps} />
    </IntlAppProvider>
  )
}

export default MyApp
