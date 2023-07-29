import React from 'react'
import './loader.css'
const Loader = (): JSX.Element => {
  return (
    <div className='container__loader'>
      <div className='lds-roller'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
