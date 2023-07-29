import { type AuthenticatorDevice } from '@simplewebauthn/typescript-types'
import { supabase } from '../../supabase/index'
import { type Authenticator } from '../types/types.webauthN'

const getUserAuthenticators = async (
  idUser: string
): Promise<Authenticator[]> => {
  try {
    const { data: webAuthN, error } = await supabase
      .from('webauthn')
      .select('*')
      .eq('idUsername', idUser)
    if (error != null) throw new Error('Error al obtener el WebAuthN del usuario')
    return webAuthN
  } catch (error) {
    console.log(error)
  }
  return []
}

let authN: AuthenticatorDevice

const base64ToUint8 = (base64String: string): Uint8Array => {
  const binaryString = atob(base64String)
  const buffer = new Uint8Array(binaryString.length)

  for (let i = 0; i < binaryString.length; i++) {
    buffer[i] = binaryString.charCodeAt(i)
  }

  return buffer
}

const getUserAuthenticatorsAuth = async (
  credentialID: string
): Promise<AuthenticatorDevice> => {
  try {
    const { data: webAuthN, error } = await supabase
      .from('webauthn')
      .select('credentialPublicKey, credentialID, counter, transports')
      .like('credentialID', `${credentialID}%`)
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
      .from('webauthn')
      .update({ counter: newCounter })
      .like('credentialID', `${credentialID}%`)
    if (error != null) throw new Error('Ha ocurrido un error')
  } catch (error) {
    console.log(error)
  }
}

export { getUserAuthenticators, getUserAuthenticatorsAuth, updateUserCounter }
