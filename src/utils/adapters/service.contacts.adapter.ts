import { type Contacts, type ContactAdapter } from '../../interfaces/contacts'
export const adapterContacts = (data: Contacts[]): ContactAdapter[] => {
  const contact: ContactAdapter[] = data.map((contact) => {
    return {
      account: contact.account,
      entity: contact?.entity_name,
      name: contact?.name,
      lastname: contact?.lastname
    }
  })
  return contact
}
