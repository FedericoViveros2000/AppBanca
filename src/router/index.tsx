import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";
import UserRegister from "../components/UserRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

export { router };
