import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'

const MenuMobile = ({
  isBlack,
  isFluor,
  openCourses,
  isContactOpen,
  isCourseOpen,
  areCoursesOpen,
  handleClose,
}) => {
  const isOpen = isContactOpen || isCourseOpen || areCoursesOpen
  const formatMessage = useTranslations()
  const classes = cx('menuMobile', {
    'is-black': isBlack,
    'is-fluor': isFluor,
    'is-open': isOpen,
  })

  return (
    <header className={classes}>
      <a href="/" className="menuMobile-claim h2">
        {formatMessage('menu:claimSmall')}
      </a>
      <button
        className="menuMobile-button menu"
        onClick={isOpen ? handleClose : openCourses}
        aria-label={
          isOpen ? formatMessage('menu:close') : formatMessage('menu:open')
        }
      >
        [{isOpen ? formatMessage('menu:close') : formatMessage('menu:open')}]
      </button>
    </header>
  )
}

MenuMobile.props = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default MenuMobile
