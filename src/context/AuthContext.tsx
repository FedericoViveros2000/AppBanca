import { createContext, useContext, useState } from "react";
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
  setAuth: () => {}
});

const useAuthContext = () : AuthContext => useContext(Context);

const AuthContext = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthContext['auth']>(JSON.parse(sessionStorage.getItem('userData') as string));      
  return (
    <Context.Provider value={{auth, setAuth}}>
      {children}
    </Context.Provider>
  );
};

export { AuthContext, useAuthContext };
