import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'

const Radio = ({ isChecked, handleChange, label, name }) => {
  const t = useTranslations()

  return (
    <label className="radio" htmlFor={name}>
      <input
        className="radio-input"
        type="radio"
        id={name}
        name={name}
        value={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="radio-icon notes">
        [<span className="radio-iconCheck">X</span>]
      </span>
      <span className="radio-label notes">{t(label)}</span>
    </label>
  )
}

Radio.propTypes = {
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Radio
