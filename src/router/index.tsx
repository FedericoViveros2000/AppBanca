import { createBrowserRouter } from 'react-router-dom'
import App from '../components/App'
import CreateAccountPage from '../views/CreateAccountPage'
import HistoryPage from '../views/HistoryPage'
import HomePage from '../views/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/createAccount',
    element: <CreateAccountPage />
  },
  {
    path: '/Home',
    element: <HomePage />
  },
  {
    path: '/History',
    element: <HistoryPage/>
  }
])

export { router }
