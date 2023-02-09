import { AppState } from "./userInterface"; 

export type Form = {
    handleChangeLogin: Function;
    handleLogin: Function;
    errors?: AppState["errors"];
}

  