import React, { useContext, useEffect, useState } from "react";
import { ROUTES } from "../router/routes.types";
import { AppState } from "../interfaces/userInterface";
import { useNavigate } from "react-router-dom";
//import { getUserData } from "../utils/getUserData";
import { Context } from "../context/AuthContext";
import { useCustomer } from "./useCustomer";

const useLogin = (validationForm: Function) => {
  const {auth, changeAuth}= useContext(Context);
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
    let { user, password } = formLogin;
    const error = validationForm(e, formLogin);
    if (user && password && Object.entries(error).length === 0) {
      if (!auth) {
        getData({
          nro_documento: user,
          password: password,
        })
      }
    } else {
      setErrors(error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      changeAuth(data);
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
