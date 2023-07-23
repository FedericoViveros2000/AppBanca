import { supabase } from "../supabase/index";
import {
  GenerateRegistrationOptionsOpts,
  generateRegistrationOptions,
  verifyRegistrationResponse
} from "@simplewebauthn/server";
import { Authenticator } from "./types/types.webauthN";
import { UserModel } from "./types/types.webauthN";
import { RegistrationResponseJSON } from "@simplewebauthn/typescript-types";
import { getUserAuthenticators } from "./utils";

const { VITE_RP_NAME: rpENV, VITE_rpID: rpIDEnv } = import.meta.env;

const rpName = rpENV;
const rpID = rpIDEnv;
const origin = `http://${rpID}:5173`;
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

  await updateUserChallenge(options.challenge, user.id);

  return options;
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
  
  let verification;

  try {
    verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge: `${currentChallenge}`,
      expectedOrigin: origin,
      expectedRPID: rpID,
    });

    const { verified, registrationInfo } = verification;
    

    if (registrationInfo) {
      const newAuthenticator = {
        credentialID: btoa(String.fromCharCode(...registrationInfo.credentialID)),
        credentialPublicKey: btoa(String.fromCharCode(...registrationInfo.credentialPublicKey)),
        counter: registrationInfo?.counter,
      };

      const { data, error } = await supabase.from("webauthn").insert([newAuthenticator]).select();
  
      if (error) throw error;      
    }

    return verified;
  } catch (error) {
    console.error(error);
  }
};
