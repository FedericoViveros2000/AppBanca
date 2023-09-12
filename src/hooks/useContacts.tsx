import { type ContactAdapter } from '../interfaces/contacts'
import { useState, useEffect } from 'react'
import { getDataContacts } from '../utils/getDataContacts'

interface Props {
  data: ContactAdapter[]
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

let contact: ContactAdapter[] = []
export const useContacts = (idCustomer: number): Props => {
  const [data, setData] = useState<ContactAdapter[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const contactsFiltered = contact.filter((contact) =>
      contact.nombre
        .toLowerCase()
        .split(' ')
        .join('')
        .includes(e.target.value.toLowerCase().split(' ').join(''))
    )
    setData(contactsFiltered)
  }

  const getContacts = async (): Promise<void> => {
    try {
      const data = await getDataContacts(idCustomer)
      contact = data
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getContacts()
  }, [])

  return {
    data,
    handleSearch
  }
}
