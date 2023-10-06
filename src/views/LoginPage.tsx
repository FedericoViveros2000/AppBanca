import React from 'react'
import { Navigate } from 'react-router-dom'
import BaseGenericForm from '../components/forms/BaseGenericForm'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from '../context/AuthContext'
import { MdOutlineFingerprint } from 'react-icons/md'
import { InputCheckbox } from '../components/forms/inputs/InputCheckbox'
import { InputPassword } from '../components/forms/inputs/InputPassword'
import { ButtonPrimary } from '../components/buttons/ButtonPrimary'
import { InputsTextSet } from '../components/forms/inputs/InputsTextSet'
import { Error } from '../components/errors/Error'
import { useViewTransition } from '../hooks/viewTransitions/useViewTransition'
import { ROUTE } from '../router/router'
import { ModalQuestion } from '../components/modals/ModalQuestion'
import { useBiometricAuth } from '../hooks/biometric/useBiometricAuth'
import { startRegistration } from '@simplewebauthn/browser'
/* import { supabase } from '../supabase'
  import { TABLES } from '../interfaces/enums/database/tables'
  import { COLUMNS } from '../interfaces/enums/database/columns' */

const LoginPage: React.FC = () => {
  const { auth } = useAuthContext()
  const { viewNavigate } = useViewTransition()
  const {
    isFetching,
    showPassword,
    handleShowPassword,
    handleChangeLogin,
    isRememberID,
    errors,
    handleLogin,
    handleRememberID
  } = useLogin()
  const { isAvaible, setIsAvaible, setBiometricUse, biometricUse } =
    useBiometricAuth()

  const handleClick = async (value: boolean): void => {
    localStorage.setItem('biometricAuth', JSON.stringify(value))
    setIsAvaible(!isAvaible)
    setBiometricUse(value)

    if (value) {
      const { registerNewUser, verifyAuthenticationUser } = await import(
        '../server'
      )
      const response = JSON.parse(localStorage.getItem('biometricData'))

      const registerUser = await registerNewUser({
        id: response?.nrodocumento as unknown as string,
        username: response?.username,
        currentChallenge: response?.currentChallenge
      })

      const startRegister = await startRegistration(registerUser)

      await verifyAuthenticationUser({
        idUser: response?.nrodocumento as unknown as string,
        body: startRegister,
        currentChallenge: registerUser.challenge
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  // if (isFetching) return <Loader />;

  if (auth !== null) return <Navigate to="/Home" />

  return (
    <>
      <BaseGenericForm
        navTitle="Sign In"
        urlBack="/"
        titleForm="Welcome Back"
        subTitleForm="Hello there, sign in to continue"
        handleSubmit={handleLogin}
      >
        <>
          {biometricUse ? (
            <figure className="flex items-center justify-center my-1">
              <MdOutlineFingerprint className="font-fingerprint font-active" />
            </figure>
          ) : (
            <>
              <InputsTextSet
                disabled={isFetching}
                label="User or email"
                id="user"
                name="user"
                handleChange={handleChangeLogin}
              />
              {errors?.user !== null && <Error message={errors.user} />}
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="container__messages my-1">
                <InputPassword
                  disabled={isFetching}
                  id="password"
                  /* disabled={true} */
                  typeInput={showPassword}
                  handleChangeTypeInput={handleShowPassword}
                  handleChange={handleChangeLogin}
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
              handleChange={() => handleRememberID}
            />
          )}
          <p className="font-active fw-bold my-1">Forgot your password?</p>
          <ButtonPrimary isFetching={isFetching} />
          <p className="text-center my-1">
            <span>Don&apos;t have an account? </span>
            <span
              onClick={() => {
                viewNavigate(ROUTE.CREATEACCOUNT)
              }}
              className="font-link"
            >
              Sign up
            </span>
          </p>
        </>
      </BaseGenericForm>
      {isAvaible && (
        <>
          <div className="fixed w-full bottom-0 opacity-1-5 h-screen bg-principal"></div>
          <ModalQuestion
            classHeight="h-2-5 opacity-1"
            handleClick={handleClick}
          >
            <figure className="flex items-center justify-center my-1">
              <MdOutlineFingerprint className="font-fingerprint--login font-active" />
            </figure>
          </ModalQuestion>
        </>
      )}
    </>
  )
}

export default LoginPage
