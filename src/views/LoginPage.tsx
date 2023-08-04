import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import BaseGenericForm from '../components/forms/BaseGenericForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from '../context/AuthContext'
// import { InputTextSearch } from '../components/forms/inputs/InputTextSearch'
import { InputPassword } from '../components/forms/inputs/InputPassword'
import { ButtonPrimary } from '../components/buttons/ButtonPrimary'
import { InputsTextSet } from '../components/forms/inputs/InputsTextSet'

const LoginPage: React.FC = () => {
  const { auth } = useAuthContext()
  const {
    isFetching,
    writePassword,
    handleChangeLogin,
    typeInput,
    handleChangeTypeInput,
    handleLogin,
    changeWritePassword
  } = useLogin()

  // if (isFetching) return <Loader />;

  if (auth !== null) return <Navigate to="/Home" />

  return (
    <BaseGenericForm
      navTitle="Sign In"
      urlBack="/"
      titleForm="Welcome Back"
      subTitleForm="Hello there, sign in to continue"
      handleSubmit={handleLogin}
    >
      <>
       <InputsTextSet
        label='User or email'
        id='user'
        name='user'
        handleChange={handleChangeLogin}
       />
        {/* <label htmlFor="user" className="label">
          User or email
        </label>
        <div className="container__messages my-1">
          <InputTextSearch
            id="user"
            name="user"
            handleChange={handleChangeLogin}
          />
        </div> */}
        {writePassword && (
          <>
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="container__messages my-1">
              <InputPassword
                id="password"
                // disabled={true}
                handleChange={handleChangeLogin}
                handleChangeTypeInput={handleChangeTypeInput}
                typeInput={typeInput}
              />
            </div>
          </>
        )}
        <p className="font-active fw-bold my-1">Forgot your password?</p>
        <ButtonPrimary isFetching={isFetching} />
        <p className="text-center my-1">
          <span>Don&apos;t have an account? </span>
          <Link to="/createAccount" className="font-link">
            Sign up
          </Link>
        </p>
        <p
          className="font-active fw-bold text-center"
          onClick={changeWritePassword}
        >
          Colocar contraseña
        </p>
      </>
    </BaseGenericForm>
  )
}

export default LoginPage
