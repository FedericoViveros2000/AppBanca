import { useState } from 'react'
import { supabase } from '../supabase/index'
import { AppState } from '../interfaces/userInterface'

const initialValue = {
  nombre: '',
  email: '',
  apellido: '',
  password: '',
  direccion: '',
  nro_documento: 0,
  telefono: ''
}

/* 'nombre' | 'email' | 'apellido' |'direccion'| 'nro_documento' | 'telefono' */

const useCreateAccount = () => {
  const [newUser, setNewUser] = useState<AppState['createAccount']>(initialValue)
  const [isAccept, setIsAccept] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [createdSuccess, setCreatedSuccess] = useState(false)

  const handleCreateAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleIsAccept = () => {
    setIsAccept(!isAccept)
  }

  const createAccount = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (isAccept) {
      try {
        setLoading(true)
        console.log(newUser)

        const { error } = await supabase
          .from('clientes')
          .insert(newUser)
          .select()
        if (error != null) throw error
        setCreatedSuccess(true)
        setNewUser(initialValue)
        return
      } catch (err) {
        setCreatedSuccess(false)
        console.log(err)
      } finally {
        setLoading(false)
        setIsAccept(false)
        setError('')
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
