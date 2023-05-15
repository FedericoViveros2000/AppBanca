import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext, useEffect } from "react";
import LoginPage from "../views/LoginPage";
import CreateAccountPage from "../views/CreateAccountPage";
import HomePage from "../views/HomePage";
import HistoryPage from "../views/HistoryPage";
import { Context } from "../context/AuthContext";
import { ProtectedRoutes } from "../router/ProtectedRoutes";
import './index.css';

const App = () => {
  const auth = useContext(Context);    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes userAuth={!!auth} />}>
          <Route path="/CreateAccount" element={<CreateAccountPage />} />
          <Route path="/Home" element={<HomePage />} />
        </Route>
        <Route path="/History" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
