import React from 'react'
interface Contacts {
  name: string
  email: string
}

interface Params {
  index: number
  contacts: Contacts
}

interface Props {
  contacts: Contacts[]
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
      {contacts?.map(({ name, email }, index) => (
        <li
          className="flex space-between items-center py-1"
          key={email}
          onClick={() => {
            handleClick({
              contacts: contacts[index],
              index
            })
          }}
        >
          <p>{name}</p>
          {/* {indexSelected === index && ( */}
          <p
            className={`${
              indexSelected === index ? 'opacity-1' : 'opacity-0'
            } btn-check-blue fs-normal-sm btn-check animation`}
          >
            <i className="fa-solid fa-check" />
          </p>
          {/* )} */}
        </li>
      ))}
    </ul>
  )
}
