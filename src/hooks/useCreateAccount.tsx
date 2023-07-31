import { useState } from "react";
import { supabase } from "../supabase/index";
import { type AppState } from "../interfaces/userInterface";
import { type PostgrestError } from "@supabase/supabase-js";
import { registerNewUser, verifyAuthenticationUser } from "../server";
import {
  startRegistration,
  browserSupportsWebAuthn,
  platformAuthenticatorIsAvailable,
} from "@simplewebauthn/browser";

const initialValue = {
  nombre: "",
  email: "",
  apellido: "",
  password: "",
  direccion: "",
  nro_documento: 0,
  telefono: "",
};

let actualInput: AppState["createAccount"] = initialValue;
const useCreateAccount = () => {
  const [newUser, setNewUser] =
    useState<AppState["createAccount"]>(initialValue);
  const [isAccept, setIsAccept] = useState(false);
  const [error, setError] = useState<PostgrestError | null | string>(null);
  const [isLoading, setLoading] = useState(false);
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const handleCreateAccount = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleIsAccept = (): void => {
    setIsAccept(!isAccept);
  };

  const createAccount = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    if (isAccept) {
      try {
        setLoading(true);
        const { data: response, error } = await supabase
          .from("clientes")
          .insert(newUser)
          .select();
        if (error !== null) throw new Error(JSON.stringify(error));
        if (browserSupportsWebAuthn()) {
          platformAuthenticatorIsAvailable().then((isAvaible) => {
            if (isAvaible === true) {
              let probar = confirm(
                "Desea registrar huella para ponerla como primer metodo de autenticacion"
              );
              if (probar) {
                registerNewUser({
                  id: response[0]?.nro_documento as unknown as string,
                  username: response[0]?.nombre,
                  //currentChallenge: response[0]?.currentChallenge,
                })
                  .then((resp) => {
                    startRegistration(resp)
                      .then((respAuth) => {
                        verifyAuthenticationUser({
                          idUser: response[0]?.nro_documento as unknown as string,
                          body: respAuth, 
                          currentChallenge: resp.challenge
                        })  
                          .then(() => {})
                          .catch((err) => {
                            console.log(err);
                          });
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            } else {
              alert("Su navegador no soporta la authenticacion biometrica");
            }
          });
        } else {
          alert("Su navegador no soporta la authenticacion biometrica");
        }

        setCreatedSuccess(true);
        setNewUser(initialValue);
      } catch (err) {
        setCreatedSuccess(false);
        setError(err as string);
        console.log(err);
      } finally {
        setLoading(false);
        setIsAccept(false);
        setError(null);
      }
    } else {
      setError("Acepte los terminos y condiciones");
    }
  };

  return {
    newUser,
    error,
    isLoading,
    createAccount,
    createdSuccess,
    setCreatedSuccess,
    handleCreateAccount,
    handleIsAccept,
  };
};

export { useCreateAccount };
