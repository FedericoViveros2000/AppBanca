import type React from 'react'
import { useState, useEffect } from 'react'
import { type UserLogin } from '../interfaces/userInterface'
import { useCustomer } from './useCustomer'
import { type errors, type Login } from './types/hooks'
import { INPUTS } from './types/inputs.d.ts'
import { getUserDataExists } from '../utils/getUserData'
import { useAuthContext } from '../context/AuthContext'
import { ROUTE } from '../router/router.d.ts'
import { ERROR } from '../interfaces/enums/errors/index.d.ts'
import {
  LOCALSTORAGE,
  SESSIONSTORAGE
} from '../interfaces/enums/storage/index.d.ts'
import { adapterSessionStorageData } from '../utils/adapters/service.user.sessionstorage'
import { useViewTransition } from './viewTransitions/useViewTransition'

const useLogin = (): Login => {
  const [typeInput, setTypeInput] = useState<string>(INPUTS.PASSWORD)
  const [isRememberID, setIsRememberID] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [writePassword, setWritePassword] = useState(false)
  const { getData, isFetching } = useCustomer()
  const [formLogin, setFormLogin] = useState<UserLogin>({
    user: 0,
    password: ''
  })
  const { viewNavigate } = useViewTransition()
  const { setAuth } = useAuthContext()

  const [errors, setError] = useState<errors>({
    user: null
  })

  const handleShowPassword = (): void => { setShowPassword(!showPassword) }

  const changeWritePassword = (): void => {
    setWritePassword(true)
  }

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormLogin({
      ...formLogin,
      [name]: value
    })
  }

  const handleChangeTypeInput = (): void => {
    if (typeInput === INPUTS.TEXT) {
      setTypeInput(INPUTS.PASSWORD)
      return
    }
    setTypeInput(INPUTS.TEXT)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const { user, password } = formLogin
    getData({
      nroDocumento: user,
      password
    })
      .then((user) => {
        if (user[0]?.verified) {
          const userAdapter = adapterSessionStorageData(user)
          sessionStorage.setItem(
            SESSIONSTORAGE.USER_DATA,
            JSON.stringify(userAdapter)
          )
          if (setAuth != null) {
            setAuth(userAdapter)
          }
          viewNavigate(ROUTE.HOME)
        } else {
          setError({
            user: ERROR.INVALID_DOCUMENT
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleRememberID = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (formLogin.user <= 0) {
      setError({
        user: ERROR.INVALID_DOCUMENT
      })
      return
    }
    setError({
      user: null
    })
    if (e.target.checked) {
      const isAvaible = await getUserDataExists({ user: formLogin.user })
      if (isAvaible) {
        localStorage.setItem(LOCALSTORAGE.ID_USER, formLogin.user.toString())
        setIsRememberID(true)
        return
      }
      setIsRememberID(false)
      setError({
        user: ERROR.INVALID_DOCUMENT
      })
    }
    localStorage.removeItem(LOCALSTORAGE.ID_USER)
  }

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE.ID_USER) !== null) {
      setIsRememberID(true)
      setFormLogin({
        ...formLogin,
        user: parseInt(localStorage.getItem(LOCALSTORAGE.ID_USER) as string)
      })
    }
  }, [])

  return {
    handleChangeLogin,
    handleLogin,
    isFetching,
    errors,
    writePassword,
    handleChangeTypeInput,
    changeWritePassword,
    typeInput,
    formLogin,
    showPassword,
    handleShowPassword,
    isRememberID,
    handleRememberID
  }
}

export { useLogin }
