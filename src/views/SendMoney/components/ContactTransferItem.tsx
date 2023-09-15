import React from 'react'
import { type ContactAdapter } from '../../../interfaces/contacts'
interface Params {
  index: number
  contacts: ContactAdapter
}

interface Props {
  index: number
  contact: ContactAdapter
  indexSelected: number | null
  handleClick: ({ index, contacts }: Params) => void
}

export const ContactTransferItem: React.FC<Props> = ({
  index,
  contact,
  indexSelected,
  handleClick
}) => {
  return (
    <ul className="flex flex-column">
      {/* {contact?.map(con => ( */}
        <li
          className="flex space-between items-center py-1"
          key={contact.account}
          onClick={() => {
            handleClick({
              contacts: contact,
              index
            })
          }}
        >
          <p>{contact.name}</p>
          <p
            className={`${
              indexSelected === index ? 'opacity-1' : 'opacity-0'
            } btn-check-blue fs-normal-sm btn-check animation`}
          >
            <i className="fa-solid fa-check" />
          </p>
        </li>
      {/* ))} */}
    </ul>
  )
}
