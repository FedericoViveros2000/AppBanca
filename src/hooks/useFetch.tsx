import { useState, useEffect } from 'react'
import { supabase } from '../supabase/index'
import { AppState } from '../interfaces/userInterface'

export interface fetchData {
  data: AppState['data']
  isFetching: boolean
  getUserData: Function
}

const useFetch = (table: string = 'clientes', row: string = '') => {
  const [data, setData] = useState<AppState['data']>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)

  // Funcion mediante la cual obtenemos los datos del usuario que intenta Iniciar Sesion
  const getUserData = async (nro_documento: string, password: string) => {
    try {
      setIsFetching(true)
      const response = await supabase
        .from(table)
        .select()
        .eq('nro_documento', nro_documento)
        .eq('password', password)
      setData(response.data)
      console.log(data)
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        setIsFetching(false)
      }, 5000)
    }
  }

  useEffect(() => {
    if (data !== null) {
      if (data.length > 0) {
        window.location.assign('/Home')
        localStorage.setItem('userData', JSON.stringify(data))
      }
    }
  }, [data])

  return {
    data,
    isFetching,
    getUserData
  }
}

export { useFetch }
