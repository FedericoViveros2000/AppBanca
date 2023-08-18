import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../views/LoginPage'
import { ProtectedRoutes } from '../router/ProtectedRoutes'
import './index.css'
import { useAuthContext } from '../context/AuthContext'
import { BottomBar } from './navigation/BottomBar'

/*
Vistas con carga perezosa
*/
const HomePage = lazy(async () => await import('../views/HomePage'))
// const LoginPage = lazy(() => import('../views/LoginPage'));
const CreateAccountPage = lazy(
  async () => await import('../views/CreateAccountPage')
)
const SendMoneyPage = lazy(
  async () => await import('../views/SendMoney/SendMoneyPage')
)
const ConfigurationPage = lazy(async () => await import('../views/ConfigurationPage'))
const HistoryPage = lazy(async () => await import('../views/HistoryPage'))

const App = (): JSX.Element => {
  const { auth } = useAuthContext()

  return (
    <Suspense fallback={<div>Cargando</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/CreateAccount" element={<CreateAccountPage />} />
          <Route element={<ProtectedRoutes userAuth={!!auth} redirectTo="/" />}>
            <Route path="/Home" element={<HomePage />} >
            <Route path="/SendMoney" element={<SendMoneyPage />} />
            <Route path="/History" element={<HistoryPage />} />
            <Route path="/configuration" element={<ConfigurationPage/>}/>
          <BottomBar/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
