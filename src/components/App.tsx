import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../views/LoginPage'
import { ProtectedRoutes } from '../router/ProtectedRoutes'
import './index.css'
import { useAuthContext } from '../context/AuthContext'
import { ROUTE } from '../router/router'
import { ProtectedRoutesAnothers } from '../router/ProtectedRoutesAnothers'

const ReviewMoneyPage = lazy(
  async () => await import('../views/SendMoney/ReviewMoney/ReviewMoneyPage')
)
/*
Vistas con carga perezosa
*/
const HomePage = lazy(async () => await import('../views/HomePage'))
// const LoginPage = lazy(() => import('../views/LoginPage'));
const CreateAccountPage = lazy(
  async () => await import('../views/CreateAccountPage')
)
const ContactsMoneyPage = lazy(
  async () => await import('../views/SendMoney/ContactsMoney/ContactsMoneyPage')
)

const TransferMoneyPage = lazy(
  async () => await import('../views/SendMoney/TransferMoney/TransferMoneyPage')
)
const ConfigurationPage = lazy(
  async () => await import('../views/ConfigurationPage')
)
const HistoryPage = lazy(async () => await import('../views/HistoryPage'))

const App = (): JSX.Element => {
  const { auth } = useAuthContext()
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.LOGIN} element={<LoginPage />} />
          <Route path={ROUTE.CREATEACCOUNT} element={<CreateAccountPage />} />
          <Route
            element={
              <ProtectedRoutes
                userAuth={auth !== null}
                redirectTo={ROUTE.LOGIN}
              />
            }
          >
            <Route path={ROUTE.HOME} element={<HomePage />} />
            <Route path={ROUTE.HISTORY} element={<HistoryPage />} />
          </Route>

          <Route
            element={
              <ProtectedRoutesAnothers
                userAuth={auth !== null}
                redirectTo={ROUTE.LOGIN}
              />
            }
          >
            <Route
              path={ROUTE.CONTACTSSENDMONEY}
              element={<ContactsMoneyPage />}
            />
            <Route path={ROUTE.CONFIGURATION} element={<ConfigurationPage />} />
          </Route>
          <Route path={ROUTE.TRANSFERMONEY} element={<TransferMoneyPage />} />
          <Route path={ROUTE.REVIEWMONEYPAGE} element={<ReviewMoneyPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
