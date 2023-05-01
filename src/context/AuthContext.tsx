import { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactElement;
}

const Context = createContext([]);

const AuthContext = ({ children }: Props) => {
  const [auth, setAuth] = useState<string[]>(
    JSON.parse(localStorage.getItem("userData") as string)
  );

  return (
    <Context.Provider value={{ authData: auth, changeAuth: setAuth }}>
      {children}
    </Context.Provider>
  );
};

export { AuthContext, Context };
