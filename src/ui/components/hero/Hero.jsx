import PropTypes from 'prop-types'
import cx from 'classnames'
import Loading from '../loading/Loading'
import useTranslations from '../../../hooks/useTranslations'

const Hero = ({ type }) => {
  const t = useTranslations()
  const classes = cx('hero', {
    'is-full': type === 'full',
    'is-half': type === 'half',
    'is-third': type === 'third',
    'is-quarter': type === 'quarter',
  })
  return (
    <div className={classes}>
      <p className="hero__heading">Class[e]</p>
      <Loading title={t('manifest:header')} number={1} />
    </div>
  )
}

Hero.propTypes = {}

export default Hero
