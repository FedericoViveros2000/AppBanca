import { Link, Navigate } from "react-router-dom";
import BaseGenericForm from "../components/forms/BaseGenericForm";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../context/AuthContext";
import { InputTextSearch } from "../components/forms/inputs/InputTextSearch";
import { InputPassword } from "../components/forms/inputs/InputPassword";
import { ButtonPrimary } from "../components/buttons/ButtonPrimary";

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
          <InputTextSearch id="user" handleChange={handleChangeLogin} />
        </div>
        {/* {errors.user && <p>{errors.user}</p>} */}
        <label htmlFor="password" className="label__login">
          Password
        </label>
        <div className="container__messages my-1">
          <InputPassword
          disabled={true}
            handleChange={handleChangeLogin}
            handleChangeTypeInput={handleChangeTypeInput}
            type_input={type_input}
          />
        </div>
        {/* {errors.password && <p>{errors.password}</p>} */}
        <p className="font-active fw-bold my-1">Forgot your password?</p>
        <ButtonPrimary
          isFetching={isFetching}
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
