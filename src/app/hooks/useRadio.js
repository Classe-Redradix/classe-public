import { useState } from 'react'

const useRadio = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  return [value, onChange, setValue]
}

export default useRadio
