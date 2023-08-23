import { type UserRegister, type AppState, type UserDataVerified } from '../../interfaces/userInterface'

export interface Props {
  nroDocumento: number
  password?: string | null
}

export interface errors {
  user: string | null
}

export interface Hooks {
  handleChangeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void
  isFetching: boolean
  errors: errors
  writePassword: boolean
  handleChangeTypeInput: () => void
  changeWritePassword: () => void
  typeInput: string
  formLogin: AppState['form']
  getData: ({ nroDocumento }: Props) => Promise<UserDataVerified[]>
  newUser: UserRegister
  isRememberID: boolean
  showPassword: boolean
  handleShowPassword: () => void
  handleRememberID: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
}

export type Login = Omit<Hooks, 'getData' | 'newUser'>
export type Customers = Pick<Hooks, 'isFetching' | 'getData'>
