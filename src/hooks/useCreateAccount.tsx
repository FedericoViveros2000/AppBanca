import { useState } from 'react'
import { supabase } from '../supabase/index'
import { type AppState } from '../interfaces/userInterface'
import { type PostgrestError } from '@supabase/supabase-js'

const initialValue = {
  nombre: '',
  email: '',
  apellido: '',
  password: '',
  direccion: '',
  nro_documento: 0,
  telefono: ''
}

const useCreateAccount = () => {
  const [newUser, setNewUser] = useState<AppState['createAccount']>(initialValue)
  const [isAccept, setIsAccept] = useState(false)
  const [error, setError] = useState<PostgrestError | null | string>(null)
  const [isLoading, setLoading] = useState(false)
  const [createdSuccess, setCreatedSuccess] = useState(false)

  const handleCreateAccount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleIsAccept = (): void => { setIsAccept(!isAccept) }

  const createAccount = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault()
    if (isAccept) {
      try {
        setLoading(true)
        const { error } = await supabase
          .from('clientes')
          .insert(newUser)
          .select()
        if (error !== null) throw new Error(JSON.stringify(error))
        setCreatedSuccess(true)
        setNewUser(initialValue)
      } catch (err) {
        setCreatedSuccess(false)
        setError(err as string)
        console.log(err)
      } finally {
        setLoading(false)
        setIsAccept(false)
        setError(null)
      }
    } else {
      setError('Acepte los terminos y condiciones')
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
