import React from 'react'
import { HiPlusSm } from 'react-icons/hi'
interface Props {
  title?: string
  handleClick: () => void
}
export const ButtonAdd: React.FC<Props> = ({ title, handleClick }) => {
  return (
    <div
      className="flex items-center pb-1"
      onClick={handleClick}
    >
      <span className="mr-1 bg-principal-light w-50 h-50 flex items-center justify-center rounded-full">
        <HiPlusSm className="font-active fs-normal-xl" />
      </span>
      <p className="font-active fw-semibold">{title}</p>
    </div>
  )
}
