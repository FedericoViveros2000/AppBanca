import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useFetch, fetchData } from "../hooks/useFetch";
import Loader from "./Loader";
import { validationLogin } from "./validations/validationLogin";
import { Form } from "../interfaces/loginTypes";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  let [inputType, setInputType] = useState("password");

  const changeInputType = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  let { isFetching }: fetchData = useFetch("clientes");

  let { handleChangeLogin, handleLogin, errors }: Form =
    useLogin(validationLogin);

  if (isFetching) return <Loader />;

  return (
    <div className="w-full h-screen relative">
      <form
        className="w-full absolute bottom-0 p-3"
        onSubmit={(e) => handleLogin(e)}
      >
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          autoComplete="off"
          className="input"
          name="user"
          id="user"
          disabled={isFetching}
          placeholder="Introduzca su numero de documento"
          onChange={(e) => handleChangeLogin(e)}
        />
        {errors.user && <p className="text-red-600 text-base">{errors.user}</p>}

        <label htmlFor="password">Contraseña</label>
        <div className="flex items-center border my-3 p-3 border-blue-600 rounded-md px-3">
          <input
            type={inputType}
            autoComplete="off"
            name="password"
            id="password"
            disabled={isFetching}
            className="block w-full rounded-md outline-0 bg-transparent"
            placeholder="Introduzca su contraseña"
            onChange={(e) => handleChangeLogin(e)}
          />
          <span onClick={changeInputType}>
            {inputType === "password" ? (
              <BiHide className="text-2xl" />
            ) : (
              <BiShow className="text-2xl" />
            )}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-base">{errors.password}</p>
        )}
        <input
          type="submit"
          value="Iniciar Sesion"
          disabled={isFetching}
          className={`block w-full mt-5 p-3 cursor-pointer rounded-md text-white ${
            isFetching ? "bg-red-500" : "bg-primary"
          }`}
        />
        <Link
          to="/register"
          className="block text-center w-full mt-3 p-3 cursor-pointer rounded-lg bg-slate-300"
        >
          Registrar Usuario
        </Link>
      </form>
    </div>
  );
};

export default Login;
