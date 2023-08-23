import type React from 'react'
import { useState } from 'react'
import { type AppState } from '../interfaces/userInterface'

const useForm = () => {
  const [form, setForm] = useState<AppState['register']>({
    nombre: '',
    apellido: '',
    direccion: '',
    password: '',
    email: '',
    nro_documento: '',
    telefono: ''
  })

  const [errors, setErrors] = useState({})
  // let { getUserData } = useFetch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(form)
    const error = 'Error'
    if (Object.entries(error).length === 0) {
      // getUserData(form.user, form.password);
    } else {
      setErrors(error)
    }
  }

  return {
    handleChange,
    handleSubmit,
    errors
  }
}

export { useForm }
