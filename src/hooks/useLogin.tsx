import React, { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { useFetch } from "./useFetch";

const useLogin = (validationForm: Function) => {
  
  let [formLogin, setFormLogin] = useState<AppState["form"]>({
    user: '',
    password: ''
  });

  let [errors, setErrors] = useState({});

  let { getUserData } = useFetch();

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
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
