import { type Contacts, type ContactAdapter } from '../../interfaces/contacts'
export const adapterContacts = (data: Contacts[]): ContactAdapter => {
  return {
    account: data[0].account_number,
    entity: data[0].entity_name,
    nombre: data[0].nombre,
    nro_documento: data[0].nro_documento
  }
}
