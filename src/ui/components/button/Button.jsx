import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({
  isFluor,
  isFull,
  isLink,
  isNegative,
  onClick,
  href,
  text,
  targetBlank,
}) => {
  const As = isLink ? 'a' : 'button'
  const classes = cx('mainButton', {
    'is-fluor': isFluor,
    'is-full': isFull,
    'is-negative': isNegative,
  })

  const handleClick = e => {
    e.preventDefault()
    onClick()
  }

  return (
    <As
      className={classes}
      href={href ? href : null}
      onClick={onClick ? handleClick : null}
      target={targetBlank ? '_blank' : null}
    >
      <span className="mainButton-text button">{text}</span>
    </As>
  )
}

Button.propTypes = {
  isFluor: PropTypes.bool,
  isFull: PropTypes.bool,
  isLink: PropTypes.bool,
  isNegative: PropTypes.bool,
  targetBlank: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Button
