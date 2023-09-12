import React from 'react'
import { StorieItem } from './StorieItem'
import { type ContactAdapter } from '../../interfaces/contacts'
interface Props {
  title: string
  contact: ContactAdapter[]
  handleClickContact: (data: ContactAdapter) => void
}
export const Stories: React.FC<Props> = ({ title, contact, handleClickContact }) => {
  return (
    <>
      <h2 className="my-1 font-blue fw-bold fs-normal-md">{title}</h2>
      <ul className="overflow-x-auto scroll-none flex">
        {contact?.map((data) => (
          <StorieItem
            contact={data}
            key={data.account}
            handleClick={handleClickContact}
          />
        ))}
      </ul>
    </>
  )
}
