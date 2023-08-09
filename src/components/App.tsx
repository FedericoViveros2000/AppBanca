import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../views/LoginPage'
import { ProtectedRoutes } from '../router/ProtectedRoutes'
import './index.css'
import { useAuthContext } from '../context/AuthContext'

/*
  Vistas con carga perezosa
*/

const HomePage = lazy(async () => await import('../views/HomePage'))
// const LoginPage = lazy(() => import('../views/LoginPage'));
const CreateAccountPage = lazy(async () => await import('../views/CreateAccountPage'))
const SendMoneyPage = lazy(async () => await import('../views/SendMoney/SendMoneyPage'))
const HistoryPage = lazy(async () => await import('../views/HistoryPage'))

const App = () => {
  const { auth } = useAuthContext()
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
  )
}

export default App
