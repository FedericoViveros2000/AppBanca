import { AuthenticatorDevice } from "@simplewebauthn/typescript-types";
import { supabase } from "../../supabase/index";
import { Authenticator } from "../types/types.webauthN";

const getUserAuthenticators = async (
  idUser: string
): Promise<Authenticator[]> => {
  try {
    const { data: webAuthN, error } = await supabase
      .from("webauthn")
      .select("*")
      .eq("idUsername", idUser);
    if (error) throw new Error("Error al obtener el WebAuthN del usuario");
    return webAuthN || [];
  } catch (error) {
    console.log(error);
  }
  return [];
};

let authN: AuthenticatorDevice;

const base64ToUint8 = (str: string): Uint8Array => Uint8Array.from(window.atob(str), (c) => c.charCodeAt(0));

const getUserAuthenticatorsAuth = async (
  idUser: string
): Promise<AuthenticatorDevice> => {
  /*  credentialPublicKey: Uint8Array;
    credentialID: Uint8Array;
    counter: number;
    transports?: AuthenticatorTransportFuture[]; */
  try {
    const { data: webAuthN, error } = await supabase
      .from("webauthn")
      .select("credentialPublicKey, credentialID, counter, transports")
      .eq("idUsername", idUser);
    if (error) throw new Error("Error al obtener el WebAuthN del usuario");

    authN = webAuthN[0];
    const encoder = new TextEncoder();
    
    return {
      credentialPublicKey: encoder.encode(webAuthN[0].credentialPublicKey),
      credentialID: encoder.encode(webAuthN[0].credentialID),
      counter: webAuthN[0].counter,
      transports: webAuthN[0].transports,
    };
  } catch (error) {
    console.log(error);
  }
  return authN;
};

export { getUserAuthenticators, getUserAuthenticatorsAuth };
