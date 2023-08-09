import { useState } from 'react'
import { type AppState } from '../interfaces/userInterface'
import { getUserData } from '../utils/getUserData'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  startAuthentication
} from '@simplewebauthn/browser'
import { type Props, type Customers } from './types/hooks'
import { verificationFinalUser, verifyAuthUser } from '../server/auth'

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

      const response = await getUserData({
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
        if (verified) {
          sessionStorage.setItem(
            'userData',
            JSON.stringify(response)
          )
          navigate('/Home')
          if (setAuth != null) {
            setAuth(response)
          }
        }
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
