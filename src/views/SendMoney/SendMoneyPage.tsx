import React, { useState } from 'react'
import { ContactTransfer } from './components/ContactTransfer'
import { HeaderSendMoney } from './components/HeaderSendMoney'
import { Contacts } from './components/data/Contacts'
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary'

const SendMoneyPage: React.FC = () => {
  const [contacts, setContacts] = useState(Contacts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const contactsFiltered = Contacts.filter(contact => contact.name.toLowerCase().split(' ').join('').includes(e.target.value.toLowerCase().split(' ').join('')))
    setContacts(contactsFiltered)
  }

  return (
    <section className="bg-principal container">
      <HeaderSendMoney title="Send money to" action="Cancel" handleSearch={handleSearch}/>
      <ContactTransfer contacts={contacts} />
    </section>
  )
}

export default SendMoneyPage
