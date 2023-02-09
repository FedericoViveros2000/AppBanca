import { AppState } from '../../interfaces/userInterface';

const validationLogin = (
  e: React.SyntheticEvent,
  formLogin: AppState["form"]
): AppState["errors"] => {
  e.preventDefault();

  let errors: AppState["errors"] = {};

  if (!formLogin.user) {
    errors.user = "El numero de documento del usuario no debe estar vacio";
  }

  if (!formLogin.password) {
    errors.password = "Introduzca la contraseña del usuario";
  }

  return errors;
};


export {
    validationLogin
}
