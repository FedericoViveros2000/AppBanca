import { createContext, useState } from "react";

interface Props {
  children: React.ReactElement;
}

const Context = createContext([]);

const AuthContext = ({ children }: Props) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("userData") as string)
  );
    
  return <Context.Provider value={auth}>{children}</Context.Provider>;
};

export { AuthContext, Context };
