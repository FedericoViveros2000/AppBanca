import React, { createContext, useContext, useState } from 'react'
import { type AuthContext as AuthContextType } from '../interfaces/authContext'
interface Props {
  children: React.ReactElement
}

const INITIAL_VALUE = {
  apellido: '',
  created_at: '',
  direccion: '',
  email: '',
  fecha_nacimiento: '',
  id: 0,
  nombre: '',
  nro_documento: '',
  password: '',
  telefono: '',
  verified: false,
  currentChallenge: undefined,
  account: []
}

const Context = createContext<AuthContextType>({
  auth: [INITIAL_VALUE],
  setAuth: null
})

const useAuthContext = (): AuthContextType => useContext(Context)

const AuthContext: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextType['auth']>(JSON.parse(sessionStorage.getItem('userData') as string))
  return (
    <Context.Provider value={{ auth, setAuth }}>
      {children}
    </Context.Provider>
  )
}

export { AuthContext, useAuthContext }
