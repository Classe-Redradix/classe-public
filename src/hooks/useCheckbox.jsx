import { useState } from 'react'

const useCheckbox = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked)

  const onChange = e => {
    setChecked(prevChecked => !prevChecked)
  }

  return [checked, onChange]
}

export default useCheckbox
