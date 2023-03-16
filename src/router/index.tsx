import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import CreateAccountPage from "../views/CreateAccountPage"
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createAccount",
    element: <CreateAccountPage/>,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

export { router };
