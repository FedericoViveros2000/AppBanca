import { supabase } from "../supabase/index";
import {
  type GenerateRegistrationOptionsOpts,
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { type Authenticator, type UserModel } from "./types/types.webauthN";

import { type RegistrationResponseJSON } from "@simplewebauthn/typescript-types";
import { getUserAuthenticators } from "./utils";

const { VITE_RP_NAME: rpENV } = import.meta.env;

const rpName = rpENV;
const rpID = window.location.hostname;
// const origin = `http://${rpID}:5173`;
const origin = `http://${window.location.hostname}`;
let userAuthenticators: Authenticator[] = [];

export const registerNewUser = async (user: UserModel) => {
  getUserAuthenticators(user.id).then((resp) => {
    userAuthenticators = resp;
  });

  const opts: GenerateRegistrationOptionsOpts = {
    rpName,
    rpID,
    userID: user.id,
    userName: user.username,
    timeout: 60000,
    attestationType: "none",

    excludeCredentials: userAuthenticators?.map((dev) => ({
      id: dev.credentialID,
      type: "public-key",
      transports: dev.transports,
    })),
    supportedAlgorithmIDs: [-7, -257],
  };

  const options = generateRegistrationOptions(opts);

  await updateUserChallenge(options.challenge, user.id)

  return options;
};

const updateUserChallenge = async (challenge: string, userId: string) => {
  try {
     const { error } = await supabase
      .from('clientes')
      .update({ currentChallenge: challenge })
      .eq('nro_documento', userId)
    /* const { error } = await supabase
      .from("webauthn")
      .update({ idUsername: userId })
      .eq("credentialID", challenge); */
    if (error != null) {
      throw new Error("Ha ocurrido un error al actualizar el challenge");
    }
    console.log("Challenge actualizado correctamente");
  } catch (error) {
    console.log(error);
  }
};

interface UserRegister {
  idUser: string;
  body: RegistrationResponseJSON;
  currentChallenge?: string;
}

export const verifyAuthenticationUser = async ({
  idUser,
  body,
  currentChallenge,
}: UserRegister) => {
  let verification;

  try {
    verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge: `${currentChallenge}`,
      expectedOrigin: origin,
      expectedRPID: rpID,
    });

    const { verified, registrationInfo } = verification;

    if (registrationInfo != null) {
      const newAuthenticator = {
        idUsername: idUser,
        credentialID: btoa(
          String.fromCharCode(...registrationInfo.credentialID)
        ),
        credentialPublicKey: btoa(
          String.fromCharCode(...registrationInfo.credentialPublicKey)
        ),
        counter: registrationInfo?.counter,
      };

      const { data, error } = await supabase
        .from("webauthn")
        .insert([newAuthenticator])
        .select();

      if (error != null) throw error;
    }

    return verified;
  } catch (error) {
    console.error(error);
  }
};
