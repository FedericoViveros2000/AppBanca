import { useState } from 'react'
import { supabase } from '../supabase/index'
import { type AppState } from '../interfaces/userInterface'
import {
  startRegistration,
  browserSupportsWebAuthn,
  platformAuthenticatorIsAvailable
} from '@simplewebauthn/browser'
import { validationRegister } from '../components/validations/validationRegister'
import { type UserRegisterValidations } from '../components/validations/types/validationRegister'
import { TABLES } from '../interfaces/enums/tables.d.ts'

const initialValue = {
  nombre: '',
  email: '',
  apellido: '',
  password: '',
  direccion: '',
  nro_documento: '',
  telefono: '',
  fecha_nacimiento: ''
}

const actualInput: AppState['createAccount'] = initialValue

const useCreateAccount = () => {
  const [newUser, setNewUser] =
    useState<AppState['createAccount']>(initialValue)
  const [isAccept, setIsAccept] = useState(false)
  // const [error, setError] = useState<PostgrestError | null | string>(null)
  const [error, setError] = useState<UserRegisterValidations>({})
  const [isLoading, setLoading] = useState(false)
  const [createdSuccess, setCreatedSuccess] = useState(false)

  const handleCreateAccount = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target
    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleIsAccept = (): void => {
    setIsAccept(!isAccept)
  }

  const createAccount = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault()
    const validation = validationRegister(newUser)
    if (Object.values(validation).length === 0) {
      if (isAccept) {
        try {
          setLoading(true)
          const { data: response, error } = await supabase
            .from(TABLES.CUSTOMERS)
            .insert(newUser)
            .select()
          if (error !== null) throw new Error(JSON.stringify(error))
          if (browserSupportsWebAuthn()) {
            const isAvaible = await platformAuthenticatorIsAvailable()
            if (isAvaible) {
              const activate = confirm(
                'Desea registrar huella para ponerla como primer metodo de autenticacion'
              )
              if (activate) {
                const { registerNewUser, verifyAuthenticationUser } =
                await import('../server')
                const registerUser = await registerNewUser({
                  id: response[0]?.nro_documento as unknown as string,
                  username: response[0]?.nombre,
                  currentChallenge: response[0]?.currentChallenge
                })
                const startRegister = await startRegistration(registerUser)

                await verifyAuthenticationUser({
                  idUser: response[0]?.nro_documento as unknown as string,
                  body: startRegister,
                  currentChallenge: registerUser.challenge
                }).catch((err) => {
                  console.log(err)
                })
              }
            } else {
              alert('Su navegador no soporta la authenticacion biometrica')
            }
          } else {
            alert('Su navegador no soporta la authenticacion biometrica')
          }
          setCreatedSuccess(true)
          setNewUser(initialValue)
        } catch (err) {
          setCreatedSuccess(false)
          console.log(err)
        } finally {
          setLoading(false)
          setIsAccept(false)
          setNewUser(initialValue)
          // setError(null)
        }
      }
    } else {
      setError(validation)
    }
  }

  return {
    newUser,
    error,
    isLoading,
    createAccount,
    createdSuccess,
    setCreatedSuccess,
    handleCreateAccount,
    handleIsAccept
  }
}

export { useCreateAccount }
