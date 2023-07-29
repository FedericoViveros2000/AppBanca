import React from 'react'
import { type PropInput } from '../../../interfaces/input'
export const InputDate: React.FC<PropInput> = ({
  id,
  name,
  className = 'input',
  handleChange,
  placeholder = 'Enter your username or email'
}) => {
  return (
    <input
      type="date"
      autoComplete="off"
      className={`input ${className}`}
      name={name}
      id={id}
      // disabled={isFetching}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
