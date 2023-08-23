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
          className="flex space-between items-center"
          key={email}
          onClick={() => {
            handleClick({
              contacts: contacts[index],
              index
            })
          }}
        >
          <div className='py-1'>
            <p>{name}</p>
          </div>
          {indexSelected === index && (
            <p className="btn-check-blue fs-normal-sm btn-check">
              <i className="fa-solid fa-check" />
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
