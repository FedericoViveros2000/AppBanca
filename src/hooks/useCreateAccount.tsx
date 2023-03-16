import { useState } from "react";
import { supabase } from "../supabase/index";
import { AppState } from "../interfaces/userInterface";

const useCreateAccount = () => {
  let [newUser, setNewUser] = useState<AppState["createAccount"]>({
    nombre: "",
    email: "",
    password: "",
  });
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
      const { data, error } = await supabase
        .from('clientes')
        .insert(newUser)
        .select();
      if (error) throw error;
      setCreatedSuccess(true);
      return;
    } catch (err) {
      setCreatedSuccess(false);
      console.log(err);
    }
  };

  return {
    createAccount,
    createdSuccess,
    handleCreateAccount
  };
};

export { useCreateAccount };
