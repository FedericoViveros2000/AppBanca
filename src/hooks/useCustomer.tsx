import { useState } from 'react'
import { type AppState } from '../interfaces/userInterface'
import { getUserData } from '../utils/getUserData'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  startAuthentication, startRegistration
} from '@simplewebauthn/browser'
import { type Props, type Customers } from './types/hooks'
import { verificationFinalUser, verifyAuthUser } from '../server/auth'
import { registerNewUser, verifyAuthenticationUser } from '../server'

export interface fetchData {
  data: AppState['data']
  isFetching: boolean
}

const useCustomer = (): Customers => {
  const navigate = useNavigate()
  const { setAuth } = useAuthContext()
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const getData = async ({ nroDocumento, password = null }: Props): Promise<void> => {
    try {
      setIsFetching(true)
      const response = await getUserData(nroDocumento)

      if (response !== null) {
        const register = await registerNewUser({
          id: response[0]?.nro_documento as unknown as string,
          username: response[0]?.nombre,
          currentChallenge: response[0]?.currentChallenge
        })
        const registrationStart = await startRegistration(register)
        const verifyAuthetication = await verifyAuthenticationUser({
          idUser: response[0]?.nro_documento as unknown as string,
          body: registrationStart,
          currentChallenge: register.challenge
        })
        console.log(verifyAuthetication)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }

  return {
    // data,
    isFetching,
    getData
  }
}

export { useCustomer }
