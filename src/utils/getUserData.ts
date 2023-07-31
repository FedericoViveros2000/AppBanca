import { supabase } from '../supabase/index'
import { type UserData } from '../interfaces/userInterface'
import { TABLES, COLUMNS } from '../interfaces/enums/Tables'

// Funcion mediante la cual obtenemos los datos del usuario que intenta Iniciar Sesion
let returnedData: UserData[] = []

const getUserData = async (nroDocumento: number): Promise<UserData[] | null> => {
  const userData = JSON.parse(localStorage.getItem('userData') as string)
  if (userData !== null) return userData
  const { data, error, status } = await supabase
    .from(TABLES.CUSTOMERS)
    .select()
    .eq(COLUMNS.DOCUMENT, nroDocumento)

  // .eq(COLUMNS.PASSWORD, password);
  if (error !== null) throw new Error('Error al obtener el cliente solicitado')
  if (status === 200) {
    returnedData = [
      {
        id: data[0]?.id,
        nombre: data[0]?.nombre,
        apellido: data[0]?.apellido,
        email: data[0]?.email,
        created_at: data[0]?.created_at,
        currentChallenge: data[0]?.currentChallenge,
        direccion: data[0]?.direccion,
        nro_documento: data[0]?.nro_documento,
        password: data[0]?.nro_documento,
        telefono: data[0]?.telefono,
        fecha_nacimiento: data[0]?.fecha_nacimiento
      }
    ]
    return returnedData
  }

  return null
}

const getUserDataByUserAndPassword = async (nroDocumento: number, password: string): Promise<UserData[] | null> => {
  const userData = JSON.parse(localStorage.getItem('userData') as string)
  if (userData !== null) return userData
  const { data, error, status } = await supabase
    .from(TABLES.CUSTOMERS)
    .select()
    .eq(COLUMNS.DOCUMENT, nroDocumento)
    .eq(COLUMNS.PASSWORD, password)
  if (error !== null) throw new Error('Error al obtener el cliente solicitado')
  if (status === 200) {
    returnedData = [
      {
        id: data[0]?.id,
        nombre: data[0]?.nombre,
        apellido: data[0].apellido,
        email: data[0].email,
        created_at: data[0].created_at,
        currentChallenge: data[0]?.currentChallenge,
        direccion: data[0]?.direccion,
        nro_documento: data[0]?.nro_documento,
        password: data[0]?.nro_documento,
        telefono: data[0]?.telefono,
        fecha_nacimiento: data[0]?.fecha_nacimiento
      }
    ]
    return returnedData
  }
  return null
}

export { getUserData, getUserDataByUserAndPassword }
