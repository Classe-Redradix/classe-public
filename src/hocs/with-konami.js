import { useKonami } from '../hooks'

const withKonami = Page => props => {
  useKonami()

  return <Page {...props} />
}

export default withKonami
