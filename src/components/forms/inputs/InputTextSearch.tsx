import React from 'react'
interface Props {
  id: string
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  className?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputTextSearch: React.FC<Props> = ({
  id,
  name,
  type = 'text',
  className = 'input',
  handleChange,
  placeholder = 'Enter your username or email'
}: Props) => {
  return (
    <input
      type={type}
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

export { InputTextSearch }
