import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server";
import { AuthenticationResponseJSON } from "@simplewebauthn/typescript-types";
import { Authenticator, UserModel } from "./types/types.webauthN";

import { getUserAuthenticators, getUserAuthenticatorsAuth, updateUserCounter } from "./utils";

let userAuthenticators: Authenticator[] = [];

const rpID = window.location.hostname;

const verifyAuthUser = async (user: UserModel) => {
  // (Pseudocode) Retrieve the logged-in user
  getUserAuthenticators(user.id).then((resp) => {
    userAuthenticators = resp;
  });
  // (Pseudocode) Retrieve any of the user's previously-
  // registered authenticators
  //const userAuthenticators: Authenticator[] = getUserAuthenticators(user);

  const options = generateAuthenticationOptions({
    // Require users to use a previously-registered authenticator
    allowCredentials: userAuthenticators?.map((authenticator) => ({
      id: authenticator.credentialID,
      type: "public-key",
      // Optional
      transports: authenticator.transports,
    })),
    userVerification: "preferred",
  });

  // (Pseudocode) Remember this challenge for this user
  //setUserCurrentChallenge(user, options.challenge);

  return options;
};
interface finalUser {
  body: AuthenticationResponseJSON;
  currentChallenge: string;
}

const verificationFinalUser = async ({
  body,
  currentChallenge,
}: finalUser) => {

  const {rawId} = body;

  const authenticator = await getUserAuthenticatorsAuth(rawId);  

  if (!authenticator) {
    throw new Error(
      `Could not find authenticator ${rawId} for user`
    );
  }

  let verification;
  try {
    verification = await verifyAuthenticationResponse({
      response: body,
      expectedChallenge: `${currentChallenge}`,
      expectedOrigin: origin,
      expectedRPID: rpID,
      authenticator,
    });
  } catch (error) {
    console.error(error);
  }

  
  if (verification) {
    const { verified, authenticationInfo } = verification;
    if (verified) {
      updateUserCounter(authenticationInfo.newCounter, rawId);
      return verified;
    }    
  }
  
  return false;
};

export { verifyAuthUser, verificationFinalUser };