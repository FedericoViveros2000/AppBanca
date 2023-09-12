import { type Contacts, type ContactAdapter } from '../../interfaces/contacts'
export const adapterContacts = (data: Contacts[]): ContactAdapter[] => {
  const contact: ContactAdapter[] = data.map((contact) => {
    return {
      account: contact.account_number,
      entity: contact.entity_name,
      nombre: contact.nombre,
      nro_documento: contact.nro_documento
    }
  })
  return contact
}
