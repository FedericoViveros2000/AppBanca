import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
interface Props {
  title?: string
}
export const ButtonAdd: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center py-1">
      <span className="mr-1">
        <AiOutlinePlus className='font-active fs-normal-md'/>
      </span>
      <p className="font-active fw-bold ">{title}</p>
    </div>
  )
}
