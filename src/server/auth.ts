import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server";
import { AuthenticationResponseJSON } from "@simplewebauthn/typescript-types";
import { Authenticator, UserModel } from "./types/types.webauthN";

import { getUserAuthenticators, getUserAuthenticatorsAuth } from "./utils";

let userAuthenticators: Authenticator[] = [];

const { VITE_rpID: rpID } = import.meta.env;

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
  idUser: string;
  body: AuthenticationResponseJSON;
  currentChallenge: string;
}

const verificationFinalUser = async ({
  idUser,
  body,
  currentChallenge,
}: finalUser) => {
  //const { body } = req;

  // (Pseudocode) Retrieve the logged-in user
  //const user: UserModel = getUserFromDB(loggedInUserId);
  // (Pseudocode) Get `options.challenge` that was saved above
  //const expectedChallenge: string = getUserCurrentChallenge(user);
  // (Pseudocode} Retrieve an authenticator from the DB that
  // should match the `id` in the returned credential
  const authenticator = await getUserAuthenticatorsAuth(idUser);

  if (!authenticator) {
    throw new Error(
      `Could not find authenticator ${body.id} for user ${idUser}`
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
    console.log(verification);
  } catch (error) {
    console.error(error);
  }

  if (verification) {
    const { verified } = verification;
    console.log(verified);
  }

  return verification;
};

export { verifyAuthUser, verificationFinalUser };
