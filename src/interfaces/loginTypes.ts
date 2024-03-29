import { type AppState } from './userInterface'

export interface Form {
  handleChangeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void
  errors?: AppState['errors']
  formLogin: AppState['form']
  isFetching: boolean
}
