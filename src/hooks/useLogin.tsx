import type React from 'react'
import { useState } from 'react'
import { type UserLogin } from '../interfaces/userInterface'
import { useCustomer } from './useCustomer'
import { type Login } from './types/hooks'
import { INPUTS } from './types/inputs.d.ts'

const useLogin = (): Login => {
  const [typeInput, setTypeInput] = useState<string>(INPUTS.PASSWORD)
  const [writePassword, setWritePassword] = useState(false)
  const { getData, isFetching } = useCustomer()
  const [formLogin, setFormLogin] = useState<UserLogin>({
    user: 0,
    password: ''
  })

  const [errors] = useState({})

  const changeWritePassword = (): void => { setWritePassword(true) }

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
    }).then(() => {}).catch((err) => { console.log(err) })
  }

  return {
    handleChangeLogin,
    handleLogin,
    isFetching,
    errors,
    writePassword,
    handleChangeTypeInput,
    changeWritePassword,
    typeInput,
    formLogin
  }
}

export { useLogin }
