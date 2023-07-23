import { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { getUserData } from "../utils/getUserData";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";

/* import { registerNewUser, verifyAuthenticationUser } from "../server/index";
import { startRegistration } from "@simplewebauthn/browser"; */
import { verificationFinalUser, verifyAuthUser } from "../server/auth";
import { registerNewUser, verifyAuthenticationUser } from "../server";

export interface fetchData {
  data: AppState["data"];
  isFetching: boolean;
}

interface Props {
  nro_documento: number;
  //password: string;
}

const useCustomer = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();
  //const [data, setData] = useState<AppState["data"]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getData = async ({ nro_documento }: Props) => {
    try {
      setIsFetching(true);
      const response = await getUserData(nro_documento);
      if (response.length > 0) {
        /* registerNewUser({
          id: response[0]?.nro_documento as unknown as string,
          username: response[0]?.nombre,
          currentChallenge: response[0]?.currentChallenge,
        }).then((resp) => {
          startRegistration(resp).then((respAuth) => {
            verifyAuthenticationUser(
              respAuth,
              resp.challenge
            ).then((prueba) => {
              console.log(prueba);
            });
          });
        }); */
        verifyAuthUser({
          id: response[0]?.nro_documento as unknown as string,
          username: response[0]?.nombre,
          currentChallenge: response[0]?.currentChallenge,
        }).then((resp) => {
          startAuthentication(resp).then((respStart) => {
            verificationFinalUser({
              body: respStart,
              currentChallenge: resp.challenge,
            }).then((verified) => {
              console.log(verified);
              if (verified) {
                
                sessionStorage.setItem("userData", JSON.stringify(response));
                navigate("/Home");
                setAuth(response);
              }
            });
          });
        });
        /* sessionStorage.setItem("userData", JSON.stringify(response));
        navigate("/Home"); */
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    //data,
    isFetching,
    getData,
  };
};

export { useCustomer };
