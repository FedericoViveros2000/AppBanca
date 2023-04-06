interface UserData {
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
}

type UserRegister = Pick<UserData, 'nombre' | 'email' | 'password'>

/* interface UserRegister {
  nombre: string
  apellido: string
  nro_documento: string
  email: string
  telefono: string
  direccion: string
} */

interface UserLogin {
  user: string
  password: string
}

export interface AppState {
  data: UserData[] | null
  form: UserLogin
  register: UserRegister
  errors: {
    user?: string
    password?: string
  }
  createAccount: UserRegister
}
