import React from 'react'
// import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'
import { ContactTransferItem } from './ContactTransferItem'

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
  contacts: Contacts[]
  children: React.ReactElement
  indexSelected: number | null
}

const ContactTransfer: React.FC<Props> = ({ classSticky, children, contacts, paddingBottom = 'pb-0', handleClick, indexSelected }) => {
  return (
    <section className={classSticky ?? ''}>
      {children}
      <div className={`max-h-full ${paddingBottom} scroll-none overflow-y-auto`}>
        <ContactTransferItem
          contacts={contacts}
          indexSelected={indexSelected}
          handleClick={handleClick}
        />
      </div>
    </section>
  )
}

export { ContactTransfer }
