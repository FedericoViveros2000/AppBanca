import { useState } from 'react'
import {
  type UserData,
  type AppState,
  type UserDataVerified
} from '../interfaces/userInterface'
import { getUserData } from '../utils/getUserData'
// import { useAuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
import {
  startAuthentication
  // startRegistration
} from '@simplewebauthn/browser'
import { type Props, type Customers } from './types/hooks'
import { verificationFinalUser, verifyAuthUser } from '../server/auth'
// import { registerNewUser, verifyAuthenticationUser } from '../server'

export interface fetchData {
  data: AppState['data']
  isFetching: boolean
}

const useCustomer = (): Customers => {
  // const navigate = useNavigate()
  // const { setAuth } = useAuthContext()
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const getData = async ({
    nroDocumento,
    password = null
  }: Props): Promise<UserDataVerified[]> => {
    try {
      setIsFetching(true)
      const response: UserData[] | null = await getUserData({
        user: nroDocumento,
        password
      })
      if (response !== null) {
        const respAuthUser = await verifyAuthUser({
          id: response[0]?.nro_documento as unknown as string,
          username: response[0]?.nombre,
          currentChallenge: response[0]?.currentChallenge
        })
        const startAuth = await startAuthentication(respAuthUser)
        const verified = await verificationFinalUser({
          body: startAuth,
          currentChallenge: respAuthUser.challenge
        })
        return [{
          id: response[0]?.id,
          nombre: response[0]?.nombre,
          apellido: response[0].apellido,
          email: response[0].email,
          created_at: response[0].created_at,
          currentChallenge: response[0]?.currentChallenge,
          direccion: response[0]?.direccion,
          nro_documento: response[0]?.nro_documento,
          password: response[0]?.password,
          telefono: response[0]?.telefono,
          fecha_nacimiento: response[0]?.fecha_nacimiento,
          verified
        }]
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }

    return [{
      verified: false
    }]
  }

  return {
    // data,
    isFetching,
    getData
  }
}

export { useCustomer }
