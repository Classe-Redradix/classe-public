import PropTypes from 'prop-types'
import cx from 'classnames'
import Loading from '../loading/Loading'
import useTranslations from '../../../hooks/useTranslations'

const Hero = ({ type, textClaim, number }) => {
  const formatMessage = useTranslations()
  const classes = cx('hero', {
    'is-full': type === 'full',
    'is-half': type === 'half',
    'is-third': type === 'third',
    'is-quarter': type === 'quarter',
  })
  return (
    <div className={classes}>
      <div className="scrambleTextWrapper">
        <h3 className="h1 hero__heading scrambleText">
          {formatMessage(`${textClaim}`, {
            line: text => <span className="line">{text}</span>,
            lineTab: text => <span className="line has-tab">{text}</span>,
          })}
        </h3>
      </div>
      <Loading title={formatMessage('manifest:header')} number={number} />
    </div>
  )
}

Hero.propTypes = {
  textClaim: PropTypes.string,
  number: PropTypes.number,
}

export default Hero
