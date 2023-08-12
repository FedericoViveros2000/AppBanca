import React, { createContext, useContext, useState } from 'react'
import { type AuthContext as AuthContextType } from '../interfaces/authContext'
interface Props {
  children: React.ReactElement
}

const INITIAL_VALUE = {
  apellido: null,
  created_at: '00000000',
  direccion: null,
  email: null,
  fecha_nacimiento: null,
  id: 0,
  nombre: '',
  nro_documento: 0,
  password: '',
  telefono: null,
  currentChallenge: undefined
}

const Context = createContext<AuthContextType>({
  auth: [INITIAL_VALUE],
  setAuth: undefined
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
