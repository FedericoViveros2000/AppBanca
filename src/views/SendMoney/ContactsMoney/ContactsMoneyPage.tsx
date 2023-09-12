import React, { useState } from 'react'
import { ContactTransfer } from '../components/ContactTransfer'
import { HeaderContactsSendMoney } from '../components/HeaderSendMoney'
import { useViewTransition } from '../../../hooks/viewTransitions/useViewTransition'
import { ButtonSecondary } from '../../../components/buttons/ButtonSecondary'
import { ROUTE } from '../../../router/router'
import { ButtonAdd } from '../../../components/buttons/ButtonAdd'
import { Stories } from '../../../components/stories/Stories'
import { shareData } from '../../../utils/share'
import { useAuthContext } from '../../../context/AuthContext'
import { useContacts } from '../../../hooks/useContacts'
import { type ContactAdapter } from '../../../interfaces/contacts'
import { SESSIONSTORAGE } from '../../../interfaces/enums/storage'

interface contacts {
  name: string
  email: string
}

interface Params {
  index: number
  contacts: contacts
}

const ContactsMoneyPage: React.FC = () => {
  const { viewNavigate } = useViewTransition()
  const { auth } = useAuthContext()
  const { data, handleSearch } = useContacts(auth[0]?.id)
  const [isSelected, setIsSelected] = useState<number | null>(null)

  const handleClick = ({ contacts, index }: Params): void => {
    setIsSelected(index)
    sessionStorage.setItem(SESSIONSTORAGE.USER_TRANSFER, JSON.stringify(contacts))
  }

  const handleClickContact = (data: ContactAdapter): void => {
    sessionStorage.setItem(SESSIONSTORAGE.USER_TRANSFER, JSON.stringify(data))
    viewNavigate(ROUTE.TRANSFERMONEY)
  }

  return (
    <main className="bg-principal">
      <HeaderContactsSendMoney
        title="Send money to"
        action="Cancel"
        handleSearch={handleSearch}
        handleCancel={() => {
          viewNavigate(ROUTE.HOME)
        }}
      />
      <section className="h-98">
        <div className="h-90 bg-light sticky top-1-5  radius-top-left radius-top-right ">
          <div className="container__contact pt-1-5">
            <ContactTransfer
              paddingBottom="pb-4-5"
              contacts={data}
              handleClick={handleClick}
              indexSelected={isSelected}
            >
              <section className="bg-light scroll-none ">
                <Stories
                  title="Recent"
                  contact={data}
                  handleClickContact={handleClickContact}
                />
                <p className="my-1 font-blue fw-bold fs-normal-md">
                  Your Contacts
                </p>
                <ButtonAdd title={'Invite a friend'} handleClick={shareData} />
              </section>
            </ContactTransfer>
          </div>
          <section className="fixed bg-light bottom-0 w-full p-1-5">
            <ButtonSecondary
              isFetching={isSelected === null}
              title="Next"
              handleChange={() => {
                viewNavigate(ROUTE.TRANSFERMONEY)
              }}
            />
          </section>
        </div>
      </section>
    </main>
  )
}

export default ContactsMoneyPage
