import IntlAppProvider from '../IntlProvider'
import './../styles/globals.css'
import './../assets/stylesheets/style.scss'

function MyApp({ Component, pageProps }) {
  return (
    <IntlAppProvider>
      <Component {...pageProps} />
    </IntlAppProvider>
  )
}

export default MyApp
