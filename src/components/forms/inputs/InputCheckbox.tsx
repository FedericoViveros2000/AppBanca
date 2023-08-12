import React from 'react'
import { type Props } from '../../../hooks/types/inputs'

const InputCheckbox: React.FC<Props> = ({
  id,
  label,
  handleChange,
  name,
  disabled = false,
  className,
  placeholder
}) => {
  return (
    <label htmlFor={name} className="container__accept">
      <input
        className={className}
        type="checkbox"
        id={id}
        checked={disabled}
        name={name}
        onChange={handleChange}
      />
      <span className="terms">{label}</span>
    </label>
  )
}

export { InputCheckbox }
