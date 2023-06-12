import { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { getUserData } from "../utils/getUserData";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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
