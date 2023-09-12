import React from 'react'
import { type ContactAdapter } from '../../../interfaces/contacts'
interface Params {
  index: number
  contacts: ContactAdapter
}

interface Props {
  contacts: ContactAdapter[]
  indexSelected: number | null
  handleClick: ({ index, contacts }: Params) => void
}

export const ContactTransferItem: React.FC<Props> = ({
  contacts,
  indexSelected,
  handleClick
}) => {
  return (
    <ul className="flex flex-column">
      {contacts?.map(({ nombre, account, nroDocumento }, index) => (
        <li
          className="flex space-between items-center py-1"
          key={account}
          onClick={() => {
            handleClick({
              contacts: contacts[index],
              index
            })
          }}
        >
          <p>{nombre}</p>
          <p
            className={`${
              indexSelected === index ? 'opacity-1' : 'opacity-0'
            } btn-check-blue fs-normal-sm btn-check animation`}
          >
            <i className="fa-solid fa-check" />
          </p>
        </li>
      ))}
    </ul>
  )
}
