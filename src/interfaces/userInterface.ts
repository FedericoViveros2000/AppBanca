interface UserData {
  apellido: string
  created_at: string
  email: string
  direccion: string
  fecha_nacimiento?: string
  id: number
  nombre: string
  nro_documento: number
  password: string
  telefono: string
}

interface UserLogin{
  user: string | null
  password: string | null
}

interface UserRegister {
  nombre: string
  apellido: string
  nro_documento: string
  email: string
  telefono: string
  direccion: string
}

export interface AppState {
  data: UserData[] | null
  form: UserLogin
  register: UserRegister
  errors: {
    user?: string
    password?: string
  }
}
