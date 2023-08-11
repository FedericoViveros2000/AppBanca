import { type Authenticator } from '../../server/types/types.d.ts'
export const authenticatorAdapter = (data: Authenticator[]): Authenticator[] => {
  return [
    {
      credentialID: data[0]?.credentialID,
      credentialPublicKey: data[0]?.credentialPublicKey,
      counter: data[0]?.counter,
      credentialDeviceType: data[0]?.credentialDeviceType,
      credentialBackedUp: data[0]?.credentialBackedUp,
      transports: data[0]?.transports
    }
  ]
}
