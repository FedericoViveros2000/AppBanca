import React, { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { useFetch } from "./useFetch";

const useLogin = (validationForm: Function) => {
  
  let [formLogin, setFormLogin] = useState<AppState["form"]>({
    user: null,
    password: null
  });

  let [errors, setErrors] = useState({});

  let { getUserData } = useFetch();

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let error = validationForm(e, formLogin);

    if(formLogin.user && formLogin.password && Object.entries(error).length === 0){
      getUserData(formLogin.user, formLogin.password);    
    }else{
      setErrors(error);
    }
  };

  return {
    handleChangeLogin,
    handleLogin,
    errors,
    formLogin
  };
};

export { useLogin };
