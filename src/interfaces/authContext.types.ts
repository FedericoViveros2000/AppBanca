import {UserData} from './userInterface';

export interface AuthContext {
  auth: UserData[],
  setAuth: (prueba: UserData[]) => void
}
