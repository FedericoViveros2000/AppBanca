import React from 'react'
interface Props {
  styleAdd?: string
  title?: string
  isFetching: boolean
  handleChange: () => void
}
const ButtonSecondary: React.FC<Props> = ({ title = 'Sign In', isFetching = false, handleChange, styleAdd = '' }) => {
  return (
    <button
      className={`${styleAdd} ${isFetching ? 'btn bg-fetching font-light' : 'btn bg-principal font-light'}`}
      // className={isFetching ? 'btn bg-fetching font-light' : 'btn bg-principal font-light'}
      disabled={isFetching}
      onClick={handleChange}
    >
      {title}
    </button>
  )
}

export { ButtonSecondary }
