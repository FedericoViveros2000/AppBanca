import { Routes, Route, BrowserRouter } from "react-router-dom";
import SendMoneyPage from "../views/SendMoney/SendMoneyPage";
import LoginPage from "../views/LoginPage";
import CreateAccountPage from "../views/CreateAccountPage";
import HomePage from "../views/HomePage";
import HistoryPage from "../views/HistoryPage";
import { ProtectedRoutes } from "../router/ProtectedRoutes";
import "./index.css";
import { useAuthContext } from "../context/AuthContext";

const App = () => {
  const { auth } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes userAuth={!!auth} redirectTo="/" />}>
          <Route path="/CreateAccount" element={<CreateAccountPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/SendMoney" element={<SendMoneyPage />} />
        </Route>
        <Route path="/History" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
