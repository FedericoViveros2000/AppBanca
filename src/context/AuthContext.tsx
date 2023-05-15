import { createContext, useState } from "react";
import { AuthContext } from "../interfaces/authContext.types";
interface Props {
  children: React.ReactElement;
}

const INITIAL_VALUE = {
  apellido: null,
  created_at: "00000000",
  direccion: null,
  email:  null,
  fecha_nacimiento:  null,
  id: 0,
  nombre: '',
  nro_documento: 0,
  password: '',
  telefono: null
}

const Context = createContext<AuthContext>({
  auth: [INITIAL_VALUE],
  //changeAuth: () => void {}
});

const AuthContext = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthContext['auth']>(
    JSON.parse(localStorage.getItem("userData") as string)
  );    
  /* useEffect(() => {
    setAuth({
      auth: JSON.parse(localStorage.getItem("userData") as string)
    })
  }, []) */

  /* const changeState = (): void => setAuth({
    auth: [INITIAL_VALUE]
  }); */

  return (
    <Context.Provider value={auth}>
      {children}
    </Context.Provider>
  );
};

export { AuthContext, Context };
