import { Link, Navigate } from "react-router-dom";
import BaseGenericForm from "../components/forms/BaseGenericForm";
import { useLogin } from "../hooks/useLogin";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { auth } = useAuthContext();
  const {
    isFetching,
    handleChangeLogin,
    type_input,
    handleChangeTypeInput,
    handleLogin,
    errors,
  } = useLogin();

  //if (isFetching) return <Loader />;

  if (auth) return <Navigate to="/Home"></Navigate>;

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
        <div className="container__messages my-1">
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
        <div className="container__messages my-1">
          <input
            className="input input__password"
            autoComplete="off"
            name="password"
            id="password"
            type={type_input}
            //disabled={isFetching}
            placeholder="Enter your password"
            onChange={handleChangeLogin}
          />
          {type_input === "text" ? (
            <BsEyeSlashFill
              className="fs-icon fw-normal"
              onClick={handleChangeTypeInput}
            />
          ) : (
            <BsEyeFill
              className="fs-icon fw-normal"
              onClick={handleChangeTypeInput}
            />
          )}
        </div>
        {errors.password && <p>{errors.password}</p>}
        <p className="font-active fw-bold my-1">Forgot your password?</p>
        <input
          type="submit"
          className="btn bg-principal font-light"
          value="Sign In"
          disabled={isFetching}
        />
        <p className="text-center my-1">
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
