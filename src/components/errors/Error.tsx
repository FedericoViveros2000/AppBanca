import React from 'react'
interface Props {
  message?: string
}
export const Error: React.FC<Props> = ({ message }) => <p className='font-danger lh-1 mb-1'>{message}</p>
