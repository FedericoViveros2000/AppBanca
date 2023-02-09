import React, { useState } from "react";
import { AppState } from "../interfaces/userInterface";
import { useFetch } from "./useFetch";

const useForm = (validationForm: Function) => {
  
  let [form, setForm] = useState<AppState["register"]>({
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    nro_documento: '',
    telefono: ''
  });

  let [errors, setErrors] = useState({});
  //let { getUserData } = useFetch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(form);
    /* let error = validationForm(e, form);
    if (Object.entries(error).length === 0) {
      //getUserData(form.user, form.password);    
    } else {
      setErrors(error);
    } */
  };

  return {
    handleChange,
    handleSubmit,
    errors,
  };
};

export { useForm };
