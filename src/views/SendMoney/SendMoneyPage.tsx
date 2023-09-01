import React, { useState } from 'react'
import { ContactTransfer } from './components/ContactTransfer'
import { HeaderSendMoney } from './components/HeaderSendMoney'
import { Contacts } from './components/data/Contacts'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'
import { ButtonSecondary } from '../../components/buttons/ButtonSecondary'
import { ROUTE } from '../../router/router'
import { ButtonAdd } from '../../components/buttons/ButtonAdd'
import { Stories } from '../../components/stories/Stories'
import { shareData } from '../../utils/share'

interface contacts {
  name: string
  email: string
}

interface Params {
  index: number
  contacts: contacts
}

const SendMoneyPage: React.FC = () => {
  const [contacts, setContacts] = useState(Contacts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const contactsFiltered = Contacts.filter((contact) =>
      contact.name
        .toLowerCase()
        .split(' ')
        .join('')
        .includes(e.target.value.toLowerCase().split(' ').join(''))
    )
    setContacts(contactsFiltered)
  }

  const { viewNavigate } = useViewTransition()
  const [isSelected, setIsSelected] = useState<number | null>(null)

  const handleClick = ({ contacts, index }: Params): void => {
    setIsSelected(index)
  }

  return (
    <main className="bg-principal">
      <HeaderSendMoney
        title="Send money to"
        action="Cancel"
        handleSearch={handleSearch}
        handleCancel={() => {
          viewNavigate(ROUTE.HOME)
        }}
      />
      <section className="h-98 bg-light radius-top-left radius-top-right">
        <div className="sticky top-0 container__contact pt-1-5">
          <ContactTransfer
            paddingBottom="pb-4-5"
            contacts={contacts}
            handleClick={handleClick}
            indexSelected={isSelected}
          >
            <section className="bg-light scroll-none ">
              <Stories title="Recent" />
              <p className="my-1 font-blue fw-bold fs-normal-md">
                Your Contacts
              </p>
              <ButtonAdd title={'Invite a friend'} handleClick={shareData}/>
            </section>
          </ContactTransfer>
        </div>
        <section className="fixed bg-light bottom-0 w-full p-1-5">
          <ButtonSecondary
            isFetching={isSelected === null}
            title="Next"
            handleChange={() => {
              viewNavigate(ROUTE.HOME)
            }}
          />
        </section>
      </section>
    </main>
  )
}

export default SendMoneyPage
