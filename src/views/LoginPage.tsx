import { Link } from "react-router-dom";
import { useCustomer } from "../hooks/useCustomer";
import BaseGenericForm from "../components/forms/BaseGenericForm";
import { AppState } from "../interfaces/userInterface";
import { useLogin } from "../hooks/useLogin";
import { validationLogin } from "../components/validations/validationLogin";
import Loader from "../components/loaders/Loader";
import { Form } from "../interfaces/loginTypes";

const LoginPage = () => {
  
  const { isFetching, handleChangeLogin, handleLogin, errors }: Form =
  useLogin(validationLogin);
  
  if (isFetching) return <Loader />;

  return (
    <BaseGenericForm
      navTitle="Sign In"
      urlBack="/"
      titleForm="Welcome Back"
      subTitleForm="Hello there, sign in to continue"
      handleSubmit={handleLogin}
    >
      <>
        <label htmlFor="user" className="label__login">
          User or email
        </label>
        <div className="container__messages">
          <input
            type="text"
            autoComplete="off"
            className="input"
            name="user"
            id="user"
            //disabled={isFetching}
            placeholder="Enter your username or email"
            onChange={handleChangeLogin}
          />
        </div>
        {errors.user && <p>{errors.user}</p>}
        <label htmlFor="password" className="label__login">
          Password
        </label>
        <div className="container__messages">
          <input
            className="input input__password"
            autoComplete="off"
            name="password"
            id="password"
            type="password"
            //disabled={isFetching}
            placeholder="Enter your password"
            onChange={handleChangeLogin}
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <p className="forgot__password">Forgot your password?</p>
        <input
          type="submit"
          className="btn bg-principal font-light"
          value="Sign In"
          //disabled={isFetching}
        />
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/createAccount" className="font-link">
            Sign up
          </Link>
        </p>
      </>
    </BaseGenericForm>
  );
};

export default LoginPage;
