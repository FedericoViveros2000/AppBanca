import { type UserData } from '../../interfaces/userInterface'

export const adapterUserData = (data: UserData[]): UserData[] => {
  return [
    {
      id: data[0]?.id,
      nombre: data[0]?.nombre,
      apellido: data[0]?.apellido,
      email: data[0]?.email,
      created_at: data[0]?.created_at,
      currentChallenge: data[0]?.currentChallenge,
      direccion: data[0]?.direccion,
      nro_documento: data[0]?.nro_documento,
      password: data[0]?.password,
      telefono: data[0]?.telefono,
      fecha_nacimiento: data[0]?.fecha_nacimiento
    }
  ]
}
