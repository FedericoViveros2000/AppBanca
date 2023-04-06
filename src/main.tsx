import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import Loader from './components/Loader'
import './components/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={router} fallbackElement={<Loader />}
    />
  </React.StrictMode>
)
