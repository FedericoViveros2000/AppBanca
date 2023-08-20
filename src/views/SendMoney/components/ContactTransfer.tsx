import React from 'react'
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'
import { ButtonSecondary } from '../../../components/buttons/ButtonSecondary'
interface Contacts {
  name: string
  email: string
}

interface Props {
  contacts: Contacts[]
}

const ContactTransfer: React.FC<Props> = ({ contacts }) => {
  return (
    <article className="bg-light container__contact scroll-none overflow-auto">
      <ul>
        {contacts?.map(({ name, email }) => (
          <li key={email}>{name}</li>
        ))}
      </ul>
      <section className='fixed left-0 bottom-2 w-full px-1-5'>
        <ButtonSecondary isFetching={false} title='Transfer'/>
      </section>
    </article>
  )
}

export { ContactTransfer }
