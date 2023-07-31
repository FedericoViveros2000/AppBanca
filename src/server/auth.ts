import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse
} from '@simplewebauthn/server'
import { type PublicKeyCredentialRequestOptionsJSON, type AuthenticationResponseJSON, type AuthenticatorDevice } from '@simplewebauthn/typescript-types'
import { type Authenticator, type UserModel } from './types/types.webauthN'
import { getUserAuthenticators, getUserAuthenticatorsAuth, updateUserCounter } from './utils'

interface finalUser {
  body: AuthenticationResponseJSON
  currentChallenge: string
}

let userAuthenticators: Authenticator[] = []

const rpID = window.location.hostname

const verifyAuthUser = async (user: UserModel): Promise<PublicKeyCredentialRequestOptionsJSON> => {
  // (Pseudocode) Retrieve the logged-in user
  userAuthenticators = await getUserAuthenticators(user.id)

  console.log(userAuthenticators)

  const options = generateAuthenticationOptions({
    // Require users to use a previously-registered authenticator
    allowCredentials: userAuthenticators?.map((authenticator) => ({
      id: authenticator.credentialID,
      type: 'public-key',
      // Optional
      transports: authenticator.transports
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

  if (authenticator.credentialPublicKey === null && authenticator.credentialID === null) {
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
