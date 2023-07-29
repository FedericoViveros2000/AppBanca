import React from 'react'
interface Props {
  title?: string
  isFetching: boolean
}
const ButtonPrimary: React.FC<Props> = ({ title = 'Sign In', isFetching }: Props) => {
  return (
    <button
      className="btn bg-principal font-light"
      disabled={isFetching}
    >
      {title}
    </button>
  )
}

export { ButtonPrimary }
