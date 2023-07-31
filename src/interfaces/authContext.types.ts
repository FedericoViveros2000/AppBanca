import {UserData} from './userInterface';

interface UserDataPrueba {
  id: number
  nro_documento: number | null
  nombre: string 
  apellido: string  | null
  email: string  | null
  password: string | null
  direccion: string  | null
  fecha_nacimiento?: string  | null
  created_at: string | null
  telefono: string  | null
  currentChallenge: string | undefined
}

export interface AuthContext {
  auth: UserDataPrueba[],
  setAuth: ((prueba: UserData[]) => void) | undefined
}
