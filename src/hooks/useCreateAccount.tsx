import { useState } from "react";
import { supabase } from "../supabase/index";
import { AppState } from "../interfaces/userInterface";

const initialValue = {
  nombre: "",
  email: "",
  password: ""
}

const useCreateAccount = () => {
  let [newUser, setNewUser] = useState<AppState["createAccount"]>(initialValue);
  let [isLoading, setLoading] = useState(true);
  let [createdSuccess, setCreatedSuccess] = useState(false);

  const handleCreateAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const createAccount = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(newUser)
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('clientes')
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
    }
  };

  return {
    newUser,
    isLoading,
    createAccount,
    createdSuccess,
    setCreatedSuccess,
    handleCreateAccount
  };
};

export { useCreateAccount };
