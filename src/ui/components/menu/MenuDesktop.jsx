import PropTypes from 'prop-types'
import cx from 'classnames'
import useTranslations from '../../../hooks/useTranslations'
import Cell from '../cell/Cell'

const MenuDesktop = ({
  isBlack,
  isFluor,
  openCourses,
  openContact,
  courses,
}) => {
  const t = useTranslations()
  const classes = cx('menuDesktop', {
    'is-black': isBlack,
    'is-fluor': isFluor,
  })

  return (
    <header className={classes}>
      <Cell isNegative={isBlack}>
        <a href="/" className="menuDesktop-claim menu">
          {t('menu:claim')}
        </a>
        <button
          className="menuDesktop-button menu"
          onClick={openCourses}
          aria-label={t('menu:courses')}
          role="link"
        >
          [
          <span className="braketHover">
            {courses < 10 ? `0${courses}` : courses}
          </span>
          ] {t('menu:courses')}
        </button>
        <button
          onClick={openContact}
          className="menuDesktop-link menu"
          aria-label={t('menu:contact')}
          role="link"
        >
          {t('menu:contact')}
        </button>
      </Cell>
    </header>
  )
}

MenuDesktop.propTypes = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  openCourses: PropTypes.func.isRequired,
  openContact: PropTypes.func.isRequired,
  courses: PropTypes.number.isRequired,
}

export default MenuDesktop
