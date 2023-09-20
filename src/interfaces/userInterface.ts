export interface UserData {
  id: number
  nro_documento: string
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

export interface UserDataVerified extends UserData {
  account: string[]
  verified: boolean
}

export type UserRegister = Pick<
UserData,
| 'nombre'
| 'password'
| 'nro_documento'
| 'email'
| 'apellido'
| 'direccion'
| 'telefono'
| 'fecha_nacimiento'
>

export interface UserLogin {
  user: number
  password?: string | null
}

export type sessionStorageUser = Omit<
Partial<UserData>,
'created_at' | 'currentChallenge' | 'password'
>

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
