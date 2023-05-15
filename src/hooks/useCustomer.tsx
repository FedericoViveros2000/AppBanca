import { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { getUserData } from "../utils/getUserData";

export interface fetchData {
  data: AppState["data"];
  isFetching: boolean;
}

interface Props {
  nro_documento: number;
  password: string;
}

const useCustomer = () => {
  const [data, setData] = useState<AppState["data"]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getData = async ({ nro_documento, password }: Props) => {
    try {
      setIsFetching(true);
      const response = await getUserData({
        nro_documento,
        password,
      });
      console.log(response);
      
      setData(response);
    } catch (error) {
      console.log(error)
    }finally{
      setIsFetching(false);
    }
  }

  return {
    data,
    isFetching,
    getData
  };
};

export { useCustomer };
