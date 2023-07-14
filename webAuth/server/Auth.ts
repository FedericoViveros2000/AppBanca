import { UserModel, Authenticator } from "../types/typeServer";
//import { startRegistration } from "@simplewebauthn/browser";
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";

const rpName = "Banca App";
const rpID = "localhost";
const origin = `https://${rpID}`;

//const user: UserModel = getUserFromDB(loggedInUserId);
//const userAuthenticators: Authenticator[] = getUserAuthenticators(user);

const generateServerKey = async (user: UserModel) => {
  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: user.id,
    userName: user.username,
    attestationType: "none",
    /* excludeCredentials: userAuthenticators.map(authenticator => ({
        id: authenticator.credentialID,
        type: 'public-key',
        transports: authenticator.transports,
      })), */
  });

  return options;
};

interface Options {
  challenge: string;
  body: string;
}

const verifyRegistration = async ({ challenge, body }: Options) => {
  try {
    const verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge: challenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
    });
    console.log(verification);
    
    return verification;
  } catch (error) {
    console.log(error);
  }
};

// (Pseudocode) Remember the challenge for this user
//setUserCurrentChallenge(user, options.challenge);

export { generateServerKey, verifyRegistration };
