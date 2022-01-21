import PropTypes from 'prop-types'

const Loading = ({ isClose, number, title }) => {
  return (
    <section className="loading">
      <p className="loading-title tiny">
        {isClose ? `</${title}>` : `<${title}>`}
      </p>
      <div className="loading-numberWrap">
        <p className="loading-number tiny" style={{ left: number + '%' }}>
          [{number < 10 ? `0${number}` : number}]
        </p>
      </div>
      <p className="loading-title tiny">
        {isClose ? `</${title}>` : `</${title}>`}
      </p>
    </section>
  )
}

Loading.propTypes = {
  isClose: PropTypes.bool,
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
}

export default Loading
