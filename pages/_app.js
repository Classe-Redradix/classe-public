import IntlAppProvider from 'app/IntlProvider'
import '../styles/globals.css'
import './../src/assets/stylesheets/style.scss'

function MyApp({ Component, pageProps }) {
  return (
    <IntlAppProvider>
      <Component {...pageProps} />
    </IntlAppProvider>
  )
}

export default MyApp
