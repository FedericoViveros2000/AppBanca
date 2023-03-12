import { AppState } from "./userInterface"; 

export type Form = {
    handleChangeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLogin: (e: React.SyntheticEvent) => void;
    errors?: AppState["errors"];
    formLogin: AppState["form"]
}

  