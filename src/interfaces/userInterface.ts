export interface UserData {
  id: number
  nro_documento: number
  nombre: string
  apellido: string | null
  email: string | null
  password: string
  direccion: string | null
  fecha_nacimiento?: string | null
  created_at: string
  telefono: string | null
  currentChallenge: string | undefined;
  /* apellido: null,
  created_at: "00000000",
  direccion: null,
  email:  null,
  fecha_nacimiento:  null,
  id: 0,
  nombre: '',
  nro_documento: 0,
  password: '',
  telefono: null */
}

type UserRegister = Pick<UserData, 'nombre' | 'password' | 'email' | 'apellido' |'direccion'| 'nro_documento' | 'telefono'>

interface UserLogin {
  user: number
  password: string
}

export interface AppState {
  data: UserData[]
  form: UserLogin
  register: UserRegister
  errors: {
    user?: string
    password?: string
  }
  createAccount: UserRegister
}
