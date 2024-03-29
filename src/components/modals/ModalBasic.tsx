import React from 'react'
import './styles/modal.css'
interface Props {
  children: JSX.Element
}

const ModalBasic = ({ children }: Props) => {
  return (
    <article className='container__modal'>
      <div className='container--bubble--general'>
        <div className='container--bubble'>
          <div className='bubble' />
          <div className='bubble container__modal--bubble--two' />
        </div>
      </div>
      <div className='container__modal--content'>{children}</div>
    </article>
  )
}

export default ModalBasic
