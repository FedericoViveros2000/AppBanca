import React from 'react'
import { type PropInput } from '../../../interfaces/input'

const InputEmail: React.FC<PropInput> = ({
  id,
  className = 'input',
  handleChange,
  placeholder = 'Enter your username or email'
}) => {
  return (
    <input
      type="email"
      autoComplete="off"
      className={`input ${className}`}
      name={id}
      id={id}
      // disabled={isFetching}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export { InputEmail }
