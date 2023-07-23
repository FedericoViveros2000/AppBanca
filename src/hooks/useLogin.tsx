import React, { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { useAuthContext } from "../context/AuthContext";
import { useCustomer } from "./useCustomer";

const useLogin = () => {
  const { auth } = useAuthContext();
  const [type_input, setTypeInput] = useState('password');
  const { getData, isFetching } = useCustomer();
  const [formLogin, setFormLogin] = useState<AppState["form"]>({
    user: 0,
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleChangeTypeInput = () => {
    if (type_input === 'text') {
      setTypeInput('password');
      return;
    }
    setTypeInput('text');
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, password } = formLogin;
    console.log(auth);
    
    if (!auth) {
      /* {
        nro_documento: user,
        password: password,
      } */
      getData({
        nro_documento: user
      } ) 
    }
  };

  return {
    handleChangeLogin,
    handleLogin,
    isFetching,
    errors,
    handleChangeTypeInput, 
    type_input,
    formLogin,
  };
};

export { useLogin };
