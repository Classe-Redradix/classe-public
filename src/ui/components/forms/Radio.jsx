import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'

const Radio = ({ isChecked, label, name, value, id, onChange }) => {
  const t = useTranslations()

  return (
    <label className="radio" htmlFor={id}>
      <input
        type="radio"
        name={name}
        id={id}
        className="radio-input"
        value={value}
        checked={isChecked}
        onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Radio
