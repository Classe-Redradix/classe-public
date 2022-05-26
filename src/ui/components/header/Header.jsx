import PropTypes from 'prop-types'

const Header = ({ isClose, number, title }) => {
  return (
    <section className="header">
      <p className="header-title tiny">
        {isClose ? `</${title}>` : `<${title}>`}
      </p>
      {!isClose ? (
        <p className="header-number tiny">
          [{number < 10 ? `0${number}` : number}]
        </p>
      ) : null}
    </section>
  )
}

Header.propTypes = {
  isClose: PropTypes.bool,
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
}

export default Header
