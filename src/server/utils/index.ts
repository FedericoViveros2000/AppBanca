import { type AuthenticatorDevice } from '@simplewebauthn/typescript-types'
import { supabase } from '../../supabase/index'
import { type Authenticator } from '../types/types.webauthN'
import { base64ToUint8 } from './base64'
import { TABLES } from '../../interfaces/enums/database/tables'
import { COLUMNS } from '../../interfaces/enums/database/columns'

const getUserAuthenticators = async (
  idUser: string
): Promise<Authenticator[]> => {
  try {
    const { data: webAuthN, error } = await supabase
      .from(TABLES.WEBAUTHN)
      .select(COLUMNS.ALL)
      .eq(COLUMNS.IDUSERNAME, idUser)
    if (error !== null) throw new Error('Error al obtener el WebAuthN del usuario')
    return webAuthN
  } catch (error) {
    console.log(error)
  }
  return []
}

let authN: AuthenticatorDevice

const getUserAuthenticatorsAuth = async (
  credentialID: string
): Promise<AuthenticatorDevice> => {
  try {
    const { data: webAuthN, error } = await supabase
      .from(TABLES.WEBAUTHN)
      .select(`${COLUMNS.CREDENTIALID}, ${COLUMNS.CREDENTIALPUBLICKEY}, ${COLUMNS.COUNTER}, ${COLUMNS.TRANSPORTS}`)
      .like(COLUMNS.CREDENTIALID, `${credentialID}%`)
    if (error != null) throw new Error('Error al obtener el WebAuthN del usuario')

    return {
      credentialPublicKey: base64ToUint8(webAuthN[0].credentialPublicKey),
      credentialID: base64ToUint8(webAuthN[0].credentialID),
      counter: webAuthN[0].counter,
      transports: webAuthN[0].transports
    }
  } catch (error) {
    console.log(error)
  }
  return authN
}

const updateUserCounter = async (newCounter: number, credentialID: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from(TABLES.WEBAUTHN)
      .update({ counter: newCounter })
      .like(COLUMNS.CREDENTIALID, `${credentialID}%`)
    if (error != null) throw new Error('Ha ocurrido un error')
  } catch (error) {
    console.log(error)
  }
}

export { getUserAuthenticators, getUserAuthenticatorsAuth, updateUserCounter }
