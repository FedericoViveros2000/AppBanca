import { type UserRegister } from '../../interfaces/userInterface'
import { type UserRegisterValidations } from './types/validationRegister'

let errors: UserRegisterValidations = {}
const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const validationRegister = (newUser: UserRegister): UserRegisterValidations => {
  console.log(newUser)

  errors = {}
  if (newUser.nombre === '') {
    errors = {
      ...errors,
      nombre: 'Introduzca un nombre'
    }
  }

  if (newUser.apellido === '') {
    errors = {
      ...errors,
      apellido: 'Introduzca un apellido'
    }
  }

  if (newUser.direccion === '') {
    errors = {
      ...errors,
      direccion: 'Introduzca una direccion'
    }
  }

  if (newUser.email === '') {
    errors = {
      ...errors,
      email: 'Introduzca una email'
    }
  }

  if (!validRegex.test(newUser.email)) {
    errors = {
      ...errors,
      email: 'Introduzca un email válido'
    }
  }

  if (newUser.nro_documento === '') {
    errors = {
      ...errors,
      nro_documento: 'Introduzca un numero de documento válido'
    }
  }

  if (newUser.telefono === '') {
    errors = {
      ...errors,
      telefono: 'Introduzca un numero de telefono válido'
    }
  }

  if (newUser.direccion === '') {
    errors = {
      ...errors,
      direccion: 'Introduzca una direccion válida'
    }
  }

  if (newUser.fecha_nacimiento === '') {
    errors = {
      ...errors,
      fecha_nacimiento: 'Introduzca una fecha de nacimiento válida'
    }
  }

  if (newUser.password === '') {
    errors = {
      ...errors,
      password: 'Introduzca una contraseña válida'
    }
  }

  return errors
}
