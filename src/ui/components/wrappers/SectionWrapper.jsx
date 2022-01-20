import PropTypes from 'prop-types'
import cx from 'classnames'

const SectionWrapper = ({
  isBlack,
  isBlackChanger,
  isFluor,
  isFluorChanger,
  children,
  extraClass,
}) => {
  const classes = cx('sectionWrapper', `${extraClass ? extraClass : ''}`, {
    'is-black': isBlack,
    'is-blackChanger': isBlackChanger,
    'is-fluor': isFluor,
    'is-fluorChanger': isFluorChanger,
  })
  return <section className={classes}>{children}</section>
}

SectionWrapper.propTypes = {
  isBlack: PropTypes.bool,
  isBlackChanger: PropTypes.bool,
  isFluor: PropTypes.bool,
  isFluorChanger: PropTypes.bool,
  children: PropTypes.node.isRequired,
  extraClass: PropTypes.string,
}

export default SectionWrapper
