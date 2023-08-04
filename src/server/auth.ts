import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse
} from '@simplewebauthn/server'
import { type PublicKeyCredentialRequestOptionsJSON, type AuthenticationResponseJSON, type AuthenticatorDevice } from '@simplewebauthn/typescript-types'
import { type Authenticator, type UserModel } from './types/types.webauthN'
import { getUserAuthenticators, getUserAuthenticatorsAuth, updateUserCounter } from './utils'
import { base64ToUint8 } from './utils/base64'

interface finalUser {
  body: AuthenticationResponseJSON
  currentChallenge: string
}

let userAuthenticators: Authenticator[] = []

const rpID = window.location.hostname

const verifyAuthUser = async (user: UserModel): Promise<PublicKeyCredentialRequestOptionsJSON> => {
  // (Pseudocode) Retrieve the logged-in user
  userAuthenticators = await getUserAuthenticators(user.id)

  const options = generateAuthenticationOptions({
    // Require users to use a previously-registered authenticator
    allowCredentials: userAuthenticators?.map((authenticator) => ({
      id: base64ToUint8(authenticator.credentialID as unknown as string),
      type: 'public-key'
    })),
    userVerification: 'preferred'
  })

  return options
}

const verificationFinalUser = async ({
  body,
  currentChallenge
}: finalUser): Promise<boolean> => {
  const { rawId } = body

  const authenticator: AuthenticatorDevice = await getUserAuthenticatorsAuth(rawId)

  if (authenticator.credentialID === null && authenticator.credentialPublicKey === null) {
    throw new Error(
      `Could not find authenticator ${rawId} for user`
    )
  }

  let verification
  try {
    verification = await verifyAuthenticationResponse({
      response: body,
      expectedChallenge: `${currentChallenge}`,
      expectedOrigin: origin,
      expectedRPID: rpID,
      authenticator
    })
  } catch (error) {
    console.error(error)
  }

  if (verification != null) {
    const { verified, authenticationInfo } = verification
    if (verified) {
      await updateUserCounter(authenticationInfo.newCounter, rawId)
      return verified
    }
  }

  return false
}

export { verifyAuthUser, verificationFinalUser }
