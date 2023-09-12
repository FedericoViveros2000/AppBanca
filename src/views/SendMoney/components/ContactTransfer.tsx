import React from 'react'
// import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'
import { ContactTransferItem } from './ContactTransferItem'
import { type ContactAdapter } from '../../../interfaces/contacts'

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
        <ContactTransferItem
          contacts={contacts}
          indexSelected={indexSelected}
          handleClick={handleClick}
        />
      </div>
    </>
  )
}

export { ContactTransfer }
