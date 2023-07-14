import { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { getUserData } from "../utils/getUserData";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { startRegistration } from "@simplewebauthn/browser";
import { generateServerKey, verifyRegistration } from "../../webAuth/server/Auth";
export interface fetchData {
  data: AppState["data"];
  isFetching: boolean;
}

interface Props {
  nro_documento: number;
  password: string;
}

const useCustomer = () => {
  const navigate = useNavigate();
  const {setAuth} = useAuthContext();
  //const [data, setData] = useState<AppState["data"]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getData = async ({ nro_documento, password }: Props) => {
    try {
      setIsFetching(true);      
      const response = await getUserData({
        nro_documento,
        password,
      });     
      if (response.length > 0) {
        console.log(response);
        generateServerKey({
          id: ((response[0].id as unknown) as string),
          username: response[0].nombre
        }).then(async (res) => {
          const attResp = await startRegistration(res);
          verifyRegistration({
            challenge: res.challenge,
            body: JSON.stringify(attResp)
          }).then(verify => {
            console.log(verify);
          })
        })
        setAuth(response);
        sessionStorage.setItem('userData', JSON.stringify(response));
        navigate('/Home')
      }
      //setData(response);
    } catch (error) {
      console.log(error)
    }finally{
      setIsFetching(false);
    }
  }

  return {
    //data,
    isFetching,
    getData
  };
};

export { useCustomer };
