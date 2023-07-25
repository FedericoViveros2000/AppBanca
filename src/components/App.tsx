import { Routes, Route, BrowserRouter } from "react-router-dom";
//import SendMoneyPage from "../views/SendMoney/SendMoneyPage";
import LoginPage from "../views/LoginPage";
//import CreateAccountPage from "../views/CreateAccountPage";
//import HomePage from "../views/HomePage";
//import HistoryPage from "../views/HistoryPage";
import { ProtectedRoutes } from "../router/ProtectedRoutes";
import "./index.css";
import { useAuthContext } from "../context/AuthContext";
import { lazy, Suspense } from "react";

/* 
  Vistas con carga perezosa
*/

const HomePage = lazy(() => import("../views/HomePage"));
//const LoginPage = lazy(() => import('../views/LoginPage'));
const CreateAccountPage = lazy(() => import("../views/CreateAccountPage"));
const SendMoneyPage = lazy(() => import("../views/SendMoney/SendMoneyPage"));
const HistoryPage = lazy(() => import("../views/HistoryPage"));

const App = () => {
  const { auth } = useAuthContext();
  return (
    <Suspense fallback={<div>Cargando</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/CreateAccount" element={<CreateAccountPage />} />
          <Route element={<ProtectedRoutes userAuth={!!auth} redirectTo="/" />}>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/SendMoney" element={<SendMoneyPage />} />
          <Route path="/History" element={<HistoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
