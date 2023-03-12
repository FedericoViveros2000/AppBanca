import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import CreateAccount from "../components/CreateAccount";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

export { router };
