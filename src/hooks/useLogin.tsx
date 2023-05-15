import React, { useContext, useEffect, useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";
import { useCustomer } from "./useCustomer";
import {AuthContext} from '../interfaces/authContext.types'
/* validationForm: (e:React.SyntheticEvent,  formLogin: AppState["form"]) => string*/
const useLogin = () => {
  const {auth, changeAuth} : AuthContext = useContext(Context);

  const {getData, data, isFetching} = useCustomer();

  const [formLogin, setFormLogin] = useState<AppState["form"]>({
    user: 0,
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, password } = formLogin;
    //const error = validationForm(e, formLogin);
    //if (user && password && Object.entries(error).length === 0) {
      if (!auth) {       
        getData({
          nro_documento: user,
          password: password,
        })
      }
    //} else {
      //setErrors(error);
    //}
  };

  useEffect(() => {
    if (data.length > 0) {        
      changeAuth(JSON.stringify(data));
      //changeAuth(JSON.stringify(data) as string);
      localStorage.setItem("userData", JSON.stringify(data));
      navigate('/Home');
    }
  }, [data])

  return {
    handleChangeLogin,
    handleLogin,
    isFetching,
    errors,
    formLogin,
  };
};

export { useLogin };
