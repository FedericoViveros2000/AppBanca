import React from 'react'
interface Props {
  children?: React.ReactElement
  classHeight: string
  handleClick: (option: boolean) => void
}
export const ModalQuestion: React.FC<Props> = ({ children, classHeight, handleClick }) => {
  return (
    <div className={`fixed flex flex-column space-between bottom-0 bg-light w-full radius-md p-1-5 opacity-1 ${classHeight} `}>
      <p className='text-center fw-normal fs-normal'>Desea utilizar el desbloqueo biometrico?</p>
      {children}
      <div className='flex space-around'>
        <button onClick={() => { handleClick(true) }} className='btn mr-1 bg-principal font-light'>Si</button>
        <button onClick={() => { handleClick(false) }} className='btn bg-principal-light'>No</button>
      </div>
    </div>
  )
}
