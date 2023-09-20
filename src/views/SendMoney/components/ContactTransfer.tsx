import React from 'react'
import { ContactTransferItem } from './ContactTransferItem'
import { type ContactAdapter } from '../../../interfaces/contacts'
// import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'

interface Contacts {
  name: string
  email: string
}

interface Params {
  index: number
  contacts: Contacts
}

interface Props {
  classSticky?: string
  handleClick: ({ index, contacts }: Params) => void
  paddingBottom?: string
  contacts: ContactAdapter[]
  children: React.ReactElement
  indexSelected: number | null
}

const ContactTransfer: React.FC<Props> = ({
  children,
  contacts,
  paddingBottom = 'pb-0',
  handleClick,
  indexSelected
}) => {
  return (
    <>
      {children}
      <div
        className={`max-h-full ${paddingBottom} scroll-none overflow-y-auto`}
      >
        {contacts?.map((contact, index) => (
          <ContactTransferItem
            index={index}
            key={contact.account}
            contact={contact}
            indexSelected={indexSelected}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  )
}

export { ContactTransfer }
