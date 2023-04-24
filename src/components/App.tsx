import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import LoginPage from "../views/LoginPage";
import CreateAccountPage from "../views/CreateAccountPage";
import HomePage from "../views/HomePage";
import HistoryPage from "../views/HistoryPage";
import { Context } from "../context/AuthContext";
import { ProtectedRoutes } from "../router/ProtectedRoutes";
import { AppState } from "../interfaces/userInterface";

const App = () => {
  const authUser: AppState["data"] = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes userAuth={!!authUser} redirectTo="/Home">
              <LoginPage />
            </ProtectedRoutes>
          }
        />
        <Route element={<ProtectedRoutes userAuth={!!authUser} />}>
          <Route path="/CreateAccount" element={<CreateAccountPage />} />
          <Route path="/Home" element={<HomePage />} />
        </Route>
        <Route path="/History" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
