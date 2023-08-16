import { startAuthentication } from '@simplewebauthn/browser'
import { type UserDataVerified, type UserData } from '../../interfaces/userInterface'
import { verificationFinalUser, verifyAuthUser } from '../../server/auth'
import { adapterUserData } from '../adapters/service.user.adapter'

export const webAuthN = async (response: UserData[]): Promise<UserDataVerified[]> => {
  const respAuthUser = await verifyAuthUser({
    id: response[0]?.nro_documento as unknown as string,
    username: response[0]?.nombre,
    currentChallenge: response[0]?.currentChallenge
  })
  const startAuth = await startAuthentication(respAuthUser)
  const verified = await verificationFinalUser({
    body: startAuth,
    currentChallenge: respAuthUser.challenge
  })

  const userData = adapterUserData(response)

  return [{ ...userData[0], verified }]
}
