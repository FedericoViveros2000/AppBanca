import { supabase } from '../supabase/index'
import { type UserData, type UserLogin } from '../interfaces/userInterface'
import { adapterUserData } from './adapters/service.user.adapter'
import { TABLES } from '../interfaces/enums/database/tables.js'
import { COLUMNS } from '../interfaces/enums/database/columns'

let returnedData: UserData[] = []
// Funcion mediante la cual obtenemos los datos del usuario que intenta Iniciar Sesion
const controller = new AbortController()

const getUserData = async ({ user }: UserLogin): Promise<UserData[] | null> => {
  const userData = JSON.parse(localStorage.getItem('userData') as string)
  if (userData !== null) return userData

  const { data, error, status } = await supabase
    .from(TABLES.CUSTOMERS)
    // .select(COLUMNS.ALL)
    .select()
    .eq(COLUMNS.DOCUMENT, user)
    .abortSignal(controller.signal)

  if (error !== null) throw new Error('Error al obtener el cliente solicitado')

  if (status === 200) {
    returnedData = adapterUserData(data)
    return returnedData
  }

  return null
}

const getUserDataByUserAndPassword = async ({
  user,
  password
}: UserLogin): Promise<UserData[] | null> => {
  const userData = JSON.parse(localStorage.getItem('userData') as string)
  if (userData !== null) return userData
  const { data, error, status } = await supabase
    .from(TABLES.CUSTOMERS)
    .select()
    .eq(COLUMNS.DOCUMENT, user)
    .eq(COLUMNS.PASSWORD, password)
    .abortSignal(controller.signal)

  if (error !== null) throw new Error('Error al obtener el cliente solicitado')
  if (status === 200) {
    returnedData = adapterUserData(data)
    return returnedData
  }
  return null
}

const getUserDataExists = async ({ user }: UserLogin): Promise<boolean> => {
  try {
    const { data, status } = await supabase
      .from(TABLES.CUSTOMERS)
      .select(COLUMNS.DOCUMENT)
      .eq(COLUMNS.DOCUMENT, user)
    if (status === 200) {
      if (data !== null && data !== undefined && data.length > 0) {
        return true
      }
    }
  } catch (error) {
    console.log(error)
  }
  return false
}

export { getUserData, getUserDataByUserAndPassword, getUserDataExists }
