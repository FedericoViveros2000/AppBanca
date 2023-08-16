import React from 'react'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

interface Props {
  id: string
  name?: string
  typeInput?: boolean
  disabled?: boolean
  placeholder?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeTypeInput: () => void
}
const InputPassword: React.FC<Props> = ({
  id,
  typeInput = false,
  placeholder = 'Enter your password',
  handleChange,
  name = 'password',
  handleChangeTypeInput,
  disabled = false
}) => {
  return (
    <>
      <input
        id={id}
        className="input input__password"
        autoComplete="off"
        name={name}
        type={typeInput ? 'text' : 'password'}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {typeInput
        ? (
        <BsEyeSlashFill
          className="fs-icon fw-normal"
          onClick={handleChangeTypeInput}
        />
          )
        : (
        <BsEyeFill
          className="fs-icon fw-normal"
          onClick={handleChangeTypeInput}
        />
          )}
    </>
  )
}

export { InputPassword }
