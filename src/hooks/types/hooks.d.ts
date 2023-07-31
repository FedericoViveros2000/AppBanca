import { type UserRegister, type AppState } from '../../interfaces/userInterface'

export interface Props {
  nroDocumento: number
  password?: string | null
}

export interface Hooks {
  handleChangeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void
  isFetching: boolean
  errors: unknown
  writePassword: boolean
  handleChangeTypeInput: () => void
  changeWritePassword: () => void
  typeInput: string
  formLogin: AppState['form']
  getData: ({ nroDocumento }: Props) => Promise<void>
  newUser: UserRegister
}

export type Login = Omit<Hooks, 'getData' | 'newUser'>
export type Customers = Pick<Hooks, 'isFetching' | 'getData'>
