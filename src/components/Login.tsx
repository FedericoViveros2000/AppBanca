import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow, BiArrowBack } from "react-icons/bi";
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
    <div className="container">
      <section className="container__title">
        <BiArrowBack className="arrow-back"/>
        <h1 className="title">Sign In</h1>
      </section>
      <form className="container__form" onSubmit={(e) => handleLogin(e)}>
        <div>
          <h2 className="title title__normal">Welcome Back</h2>
          <p><span>Hello there, sign in to continue</span></p>
        </div>
        <label htmlFor="user" className="label__login">User or email</label>
        <input
          type="text"
          autoComplete="off"
          className="input__login"
          name="user"
          id="user"
          disabled={isFetching}
          placeholder="Enter your username or email"
          onChange={(e) => handleChangeLogin(e)}
        />
        {errors.user && <p>{errors.user}</p>}
        <label htmlFor="password" className="label__login">Password</label>
        <div className="container__password">
          <input
            type={inputType}
            className="input__login input__login--password"
            autoComplete="off"
            name="password"
            id="password"
            disabled={isFetching}
            placeholder="Enter your password"
            onChange={(e) => handleChangeLogin(e)}
          />
          <span onClick={changeInputType}>
            {inputType === "password" ? (
              <BiHide className="icon-custom"/>
            ) : (
              <BiShow className="icon-custom"/>
            )}
          </span>
        </div>
        {errors.password && (
          <p>{errors.password}</p>
        )}
        <p>
          <a href="#" className="forgot__password">
            Forgot your password?
          </a>
        </p>
        <input
          type="submit"
          className="input__sign"
          value="Sign In"
          disabled={isFetching}
        />
        <p className="signup">Don't have an account? <span className="font-link">Sign up</span></p>
      </form>
    </div>
  );
};

export default Login;
