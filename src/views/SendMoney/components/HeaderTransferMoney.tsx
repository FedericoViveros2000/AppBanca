import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

interface Props {
  title: string
  handleBack: () => void | Promise<void>
}

export const HeaderTransferMoney: React.FC<Props> = ({ title, handleBack }) => {
  return (
    <header className="px-1-5">
      <nav className="flex py-1 items-center">
        <span
          onClick={handleBack}
          className="link pe-1 "
        >
          <BiArrowBack className="arrow-back font-light" />
        </span>
        <h1 className="font-light fs-normal-md">{title}</h1>
      </nav>
    </header>
  )
}
