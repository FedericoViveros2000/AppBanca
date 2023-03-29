import { useState } from "react";
import { supabase } from "../supabase/index";
import { AppState } from "../interfaces/userInterface";

const initialValue = {
  nombre: "",
  email: "",
  password: "",
};

const useCreateAccount = () => {
  let [newUser, setNewUser] = useState<AppState["createAccount"]>(initialValue);
  let [isAccept, setIsAccept] = useState(false);
  let [error, setError] = useState("");
  let [isLoading, setLoading] = useState(false);
  let [createdSuccess, setCreatedSuccess] = useState(false);

  const handleCreateAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleIsAccept = () => {
    setIsAccept(!isAccept);
  };

  const createAccount = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isAccept) {
      try {
        setLoading(true);
        console.log(newUser);
        
        const { data, error } = await supabase
          .from("clientes")
          .insert(newUser)
          .select();
        if (error) throw error;
        setCreatedSuccess(true);
        setNewUser(initialValue);
        return;
      } catch (err) {
        setCreatedSuccess(false);
        console.log(err);
      } finally {
        setLoading(false);
        setIsAccept(false);
        setError("");
      }
    } else {
      setError("Acepte los terminos y condiciones");
    }
  };

  return {
    newUser,
    error,
    isLoading,
    createAccount,
    createdSuccess,
    setCreatedSuccess,
    handleCreateAccount,
    handleIsAccept,
  };
};

export { useCreateAccount };
