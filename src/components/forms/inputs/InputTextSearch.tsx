import React from 'react'
import { type PropsInput } from '../../../hooks/types/inputs'

const InputTextSearch: React.FC<PropsInput> = ({
  id,
  name,
  type = 'text',
  className = 'input',
  handleChange,
  disabled = false,
  placeholder = 'Enter your username or email'
}) => {
  return (
    <input
      type={type}
      autoComplete="off"
      className={`input ${className}`}
      name={name}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export { InputTextSearch }
