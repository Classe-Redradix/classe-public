import PropTypes from 'prop-types'
import cx from 'classnames'
import Loading from '../loading/Loading'
import useTranslations from '../../../hooks/useTranslations'

const Hero = ({ type, text, loaded }) => {
  const formatMessage = useTranslations()

  const classes = cx('hero', {
    'is-full': type === 'full',
    'is-half': type === 'half',
    'is-third': type === 'third',
    'is-quarter': type === 'quarter',
    'is-closed': loaded >= 30,
  })

  return (
    <div className={classes}>
      <div className="scrambleTextWrapper">
        <h3 className="h1 hero__heading scrambleText">
          {formatMessage(`${text}`, {
            line: text => <span className="line">{text}</span>,
            lineTab: text => <span className="line has-tab">{text}</span>,
          })}
        </h3>
      </div>
      {/* <Loading title={formatMessage('manifest:header')} number={loaded} /> */}
    </div>
  )
}

Hero.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
}

export default Hero
