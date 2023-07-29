import React from 'react'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

interface Props {
  id: string
  name?: string
  typeInput?: string
  disabled?: boolean
  placeholder?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeTypeInput: () => void
}
const InputPassword: React.FC<Props> = ({
  id,
  typeInput = 'password',
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
        type="password"
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {typeInput === 'text'
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
