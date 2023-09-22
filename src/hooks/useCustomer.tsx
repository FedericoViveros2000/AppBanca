import { useState } from 'react'
import {
  type UserData,
  type AppState,
  type UserDataVerified
} from '../interfaces/userInterface'
import { getUserData } from '../utils/getUserData'
import { type Props, type Customers } from './types/hooks'
import { webAuthN } from '../utils/webAuthN'
import { adapterUserData } from '../utils/adapters/service.user.adapter'
// import { useAuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
/* import {
  startAuthentication
  startRegistration
} from '@simplewebauthn/browser' */
// import { verificationFinalUser, verifyAuthUser } from '../server/auth'
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

      // Si se quiere registrar con algun medio biometrico
      if (response !== null && password === '') {
        const data = await webAuthN(response)
        return data
      }

      // Si se quiere registrar con su contraseñas
      if (response !== null) {
        const data = adapterUserData(response)
        return [{ ...data[0], verified: true }]
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }

    return [
      {
        verified: false
      }
    ]
  }

  return {
    // data,
    isFetching,
    getData
  }
}

export { useCustomer }
