import React from 'react'

interface Props {
  children: JSX.Element
}

const ModalBasic = ({ children }: Props) => {
  return (
    <article className='container__modal'>
      {children}
    </article>
  )
}

export default ModalBasic
