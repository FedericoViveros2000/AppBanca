import React from "react";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import BaseGenericForm from "./BaseGenericForm";

const validationForm = () => {
  console.log("Sin errores");
};

const CreateAccount = () => {
  let { handleChange, handleSubmit, errors } = useForm(validationForm);

  return (
    <BaseGenericForm
      navTitle="Create Account"
      urlBack="/"
      titleForm="Welcome"
      subTitleForm="Hello there, sign up to continue"
      handleSubmit={() => handleSubmit}
    >
      <>
        <div className="container__create">
          <label htmlFor="user" className="label__login">
            Name
          </label>
          <div className="container__messages">
            <input
              type="text"
              autoComplete="off"
              className="input__login"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <p className="btn">
              <i className="fa-solid fa-check"></i>
            </p>
          </div>
          <label htmlFor="user" className="label__login">
            Email address
          </label>
          <div className="container__messages">
            <input
              type="text"
              autoComplete="off"
              className="input__login"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <p className="btn">
              <i className="fa-solid fa-check"></i>
            </p>
          </div>
          <label htmlFor="password" className="label__login">
            Enter your password
          </label>
          <div className="container__messages">
            <input
              type="text"
              autoComplete="off"
              className="input__login"
              name="user"
              id="password"
              placeholder="Enter your password"
            />
            <p className="btn">
              <i className="fa-solid fa-check"></i>
            </p>
          </div>
          <label htmlFor="accept">
            <input type="checkbox" id="accept" />
          </label>
          <span className="terms">
            By creating an account, you agree to our{" "}
          </span>
          <p>
            <Link to="/">Terms of conditions</Link>
          </p>
        </div>
        <input type="submit" value="Sign In" className="input__sign" />
      </>
    </BaseGenericForm>
  );
};

export default CreateAccount;
