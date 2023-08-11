import { type UserData, type UserDataVerified, type sessionStorageUser } from '../../interfaces/userInterface'

export const adapterSessionStorageData = (response: UserDataVerified[]): sessionStorageUser[] => {
  return [
    {
      id: response[0]?.id,
      nombre: response[0]?.nombre,
      apellido: response[0].apellido,
      email: response[0].email,
      direccion: response[0]?.direccion,
      nro_documento: response[0]?.nro_documento,
      telefono: response[0]?.telefono,
      fecha_nacimiento: response[0]?.fecha_nacimiento
    }
  ]
}
