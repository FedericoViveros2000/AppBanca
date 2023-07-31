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
      const response = await getUserData(nroDocumento)
      if (response !== null) {
          verifyAuthUser({
            id: response[0]?.nro_documento as unknown as string,
            username: response[0]?.nombre,
            currentChallenge: response[0]?.currentChallenge
          })
            .then((resp) => {
              startAuthentication(resp)
                .then((respStart) => {
                  verificationFinalUser({
                    body: respStart,
                    currentChallenge: resp.challenge
                  })
                    .then((verified) => {
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
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                })
                .catch((err) => {
                  console.log(err)
                })
            })
            .catch((err) => {
              console.log(err)
            })
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
