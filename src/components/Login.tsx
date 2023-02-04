import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader"

interface fetchData {
    data: [],
    isFetching: boolean
}

const Login = () => {
  let [inputType, setInputType] = useState("password");

  let {data, isFetching}: fetchData = useFetch();

  const changeInputType = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  if(isFetching) return <Loader/>

  return (
    <div className="w-full h-screen relative">
      <form className="w-full absolute bottom-0 p-3">
        <label htmlFor="">Usuario</label>
        <input
          type="text"
          autoComplete="off"
          className="block w-full my-3 p-3 outline-0 border border-blue-600 rounded-md"
          placeholder="Introduzca su numero de documento"
        />
        <label htmlFor="">Contraseña</label>
        <div className="flex items-center border my-3 p-3 border-blue-600 rounded-md px-3">
          <input
            type={inputType}
            autoComplete="off"
            className="block w-full rounded-md outline-0 bg-transparent"
            placeholder="Introduzca su contraseña"
          />
          <span onClick={changeInputType}>
            {inputType === "password" ? (
              <BiHide className="text-2xl" />
            ) : (
              <BiShow className="text-2xl" />
            )}
          </span>
        </div>
        <input
          type="submit"
          value="Iniciar Sesion"
          className="block w-full mt-5 p-3 rounded-md bg-blue-500 text-white"
        />
      </form>
    </div>
  );
};

export default Login;
