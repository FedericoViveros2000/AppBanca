import { type ContactAdapter } from '../interfaces/contacts'
import { FUNCTIONS } from '../interfaces/enums/functions'
import { supabase } from '../supabase'
import { adapterContacts } from './adapters/service.contacts.adapter'

export const getDataContacts = async (
  idCustomer: number
): Promise<ContactAdapter[]> => {
  let adapter: ContactAdapter[] = [
    {
      account: 0,
      entity: '',
      nombre: '',
      nroDocumento: 0
    }
  ]
  const { data, error } = await supabase.rpc(FUNCTIONS.GETCONTACTS, {
    id_customer: idCustomer
  })
  if (error != null) console.error(error)
  adapter = adapterContacts(data)
  return adapter
}
