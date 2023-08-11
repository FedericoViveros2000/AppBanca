import React from 'react'
interface Props {
  title?: string
  isFetching: boolean
}
const ButtonPrimary: React.FC<Props> = ({ title = 'Sign In', isFetching = false }: Props) => {
  return (
    <button
      className={isFetching ? 'btn bg-fetching font-light' : 'btn bg-principal font-light'}
      disabled={isFetching}
    >
      {title}
    </button>
  )
}

export { ButtonPrimary }
