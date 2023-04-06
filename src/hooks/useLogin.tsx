import React, { useState } from 'react'
import { AppState } from '../interfaces/userInterface'
import { useFetch } from './useFetch'

const useLogin = (validationForm: Function) => {
  const [formLogin, setFormLogin] = useState<AppState['form']>({
    user: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const { getUserData } = useFetch()

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormLogin({
      ...formLogin,
      [name]: value
    })
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const error = validationForm(e, formLogin)
    if (formLogin.user && formLogin.password && Object.entries(error).length === 0) {
      getUserData(formLogin.user, formLogin.password)
    } else {
      setErrors(error)
    }
  }

  return {
    handleChangeLogin,
    handleLogin,
    errors,
    formLogin
  }
}

export { useLogin }
