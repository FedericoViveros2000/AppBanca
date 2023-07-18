import { supabase } from "../supabase/index";
import {
  GenerateRegistrationOptionsOpts,
  VerifiedRegistrationResponse,
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { Authenticator } from "./types/types.webauthN";
import { UserModel } from "./types/types.webauthN";
import { RegistrationResponseJSON } from "@simplewebauthn/typescript-types";

const { VITE_RP_NAME: rpENV, VITE_rpID: rpIDEnv } = import.meta.env;

const rpName = rpENV;
const rpID = rpIDEnv;
const origin = `http://${rpID}:5173`;
let userAuthenticators: Authenticator[] = [];

export const registerNewUser = async (user: UserModel) => {
  // (Pseudocode) Retrieve the user from the database
  // after they've logged in
  //const user: UserModel = getUserFromDB(loggedInUserId);
  // (Pseudocode) Retrieve any of the user's previously-
  // registered authenticators
  getUserAuthenticators(user.id).then((resp) => {
    userAuthenticators = resp;
  });

  const opts: GenerateRegistrationOptionsOpts = {
    rpName,
    rpID,
    userID: user.id,
    userName: user.username,
    timeout: 60000,
    attestationType: 'none',
    /**
     * Passing in a user's list of already-registered authenticator IDs here prevents users from
     * registering the same device multiple times. The authenticator will simply throw an error in
     * the browser if it's asked to perform registration when one of these ID's already resides
     * on it.
     */

    excludeCredentials: userAuthenticators?.map(dev => ({
      id: dev.credentialID,
      type: 'public-key',
      transports: dev.transports,
    })),
    /* authenticatorSelection: {
      residentKey: 'discouraged',
    }, */
    /**
     * Support the two most common algorithms: ES256, and RS256
     */
    supportedAlgorithmIDs: [-7, -257],
  };

  const options = generateRegistrationOptions(opts);

  await updateUserChallenge(options.challenge, user.id);
  
  return options;
};

const getUserAuthenticators = async (
  idUser: string
): Promise<Authenticator[]> => {
  try {
    const { data: webAuthN, error } = await supabase
      .from("webAuthN")
      .select("*")
      .eq("idUsername", idUser);
    if (error) throw new Error("Error al obtener el WebAuthN del usuario");
    return webAuthN || [];
  } catch (error) {
    console.log(error);
  }
  return [];
};

const updateUserChallenge = async (challenge: string, userId: string) => {
  try {
    const { error } = await supabase
      .from("clientes")
      .update({ currentChallenge: challenge })
      .eq("nro_documento", userId);
    if (error)
      throw new Error("Ha ocurrido un error al actualizar el challenge");
    console.log("Challenge actualizado correctamente");
  } catch (error) {
    console.log(error);
  }
};

export const verifyAuthenticationUser = async (
  body: RegistrationResponseJSON,
  currentChallenge?: string
) => {
  
  // (Pseudocode) Retrieve the logged-in user
  //const user: UserModel = getUserFromDB(loggedInUserId);
  // (Pseudocode) Get `options.challenge` that was saved above
  //const expectedChallenge: string = getUserCurrentChallenge(user);
  let verification: VerifiedRegistrationResponse;  
  
  try {
    
    verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge: `${currentChallenge}`,
      expectedOrigin: origin,
      expectedRPID: rpID
    });

    const { verified } = verification;
    
    return verified;
  } catch (error) {
    console.error(error);
  }
};
