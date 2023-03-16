import { AppState } from "./userInterface"; 

export type Form = {
    handleChangeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
    errors?: AppState["errors"];
    formLogin: AppState["form"]
}

  