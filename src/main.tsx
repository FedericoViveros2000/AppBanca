import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContext } from "./context/AuthContext";
import App from '../src/components/App';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContext>
        <App/>
    </AuthContext>
  </React.StrictMode>
);
