import { type SetStateAction, type Dispatch } from 'react'
import { type UserDataVerified } from './userInterface'

/* interface UserDataAuth {
  id: number
  nro_documento: number | null
  nombre: string
  apellido: string | null
  email: string | null
  password: string | null
  direccion: string | null
  fecha_nacimiento?: string | null
  created_at: string | null
  telefono: string | null
  currentChallenge: string | undefined
} */

export interface AuthContext {
  auth: UserDataVerified[]
  setAuth: Dispatch<SetStateAction<UserDataVerified[]>>
}
