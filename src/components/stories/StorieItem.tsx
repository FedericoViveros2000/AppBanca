import React from 'react'
import { type ContactAdapter } from '../../interfaces/contacts'
interface ContactProps {
  contact: ContactAdapter
  handleClick: (data: ContactAdapter) => void
}
export const StorieItem: React.FC<ContactProps> = ({ contact, handleClick }) => {
  return (
    <li className="mr-1" onClick={() => { handleClick(contact) }}>
      <figure className="rounded-full storie">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt={contact?.nombre}
          className="image rounded-full "
        />
      </figure>
    </li>
  )
}
