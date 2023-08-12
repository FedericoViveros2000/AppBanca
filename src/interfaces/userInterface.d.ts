export interface UserData {
  id: number
  nro_documento: number
  nombre: string
  apellido: string
  email: string
  password: string
  direccion: string
  fecha_nacimiento?: string
  created_at: string
  telefono: string
  currentChallenge: string | undefined
}

export type UserRegister = Pick<UserData, 'nombre' | 'password' | 'email' | 'apellido' | 'direccion' | 'nro_documento' | 'telefono'>

export interface UserLogin {
  user: number
  password?: string
}

export interface AppState {
  data: UserLogin[]
  form: UserLogin
  register: UserRegister
  errors: {
    user?: string
    password?: string
  }
  createAccount: UserRegister
}
