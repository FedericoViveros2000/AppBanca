import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import BaseGenericForm from '../components/forms/BaseGenericForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from '../context/AuthContext'
import { MdOutlineFingerprint } from 'react-icons/md'
import { InputCheckbox } from '../components/forms/inputs/InputCheckbox'
import { InputPassword } from '../components/forms/inputs/InputPassword'
import { ButtonPrimary } from '../components/buttons/ButtonPrimary'
import { InputsTextSet } from '../components/forms/inputs/InputsTextSet'
import { Error } from '../components/errors/Error'

const LoginPage: React.FC = () => {
  const { auth } = useAuthContext()
  const {
    isFetching,
    writePassword,
    handleChangeLogin,
    typeInput,
    isRememberID,
    errors,
    handleChangeTypeInput,
    handleLogin,
    handleRememberID,
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
        {isRememberID
          ? (
          <figure className="flex items-center justify-center my-1">
            <MdOutlineFingerprint className="font-fingerprint font-active" />
          </figure>
            )
          : (
          <>
            <InputsTextSet
              label="User or email"
              id="user"
              name="user"
              handleChange={handleChangeLogin}
            />
            {errors?.user !== null && <Error message={errors.user} />}
          </>
            )}
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
        {!isRememberID && (
          <InputCheckbox
            id="remember"
            name="remember"
            label="Remember ID"
            disabled={isRememberID}
            handleChange={handleRememberID}
          />
        )}

        <p className="font-active fw-bold my-1">Forgot your password?</p>
        <ButtonPrimary isFetching={isFetching} />
        <p className="text-center my-1">
          <span>Don&apos;t have an account? </span>
          <Link to="/createAccount" className="font-link">
            Sign up
          </Link>
        </p>
        {/* <p
          className="font-active fw-bold text-center"
          onClick={changeWritePassword}
        >
          Colocar contraseña
        </p> */}
      </>
    </BaseGenericForm>
  )
}

export default LoginPage
