import React from 'react'
import { InputTextSearch } from './InputTextSearch'
import { type Props } from '../../../hooks/types/inputs'

export const InputsTextSet: React.FC<Props> = ({
  id,
  label,
  handleChange,
  name,
  disabled = false,
  className,
  placeholder
}) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="container__messages my-1">
        <InputTextSearch
          id={id}
          name={name}
          handleChange={handleChange}
          placeholder={placeholder}
          className={className}
        />
      </div>
    </>
  )
}
