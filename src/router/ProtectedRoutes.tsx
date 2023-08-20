import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { BottomBar } from '../components/navigation/BottomBar'

interface Props {
  children?: React.ReactElement | null
  userAuth: boolean
  redirectTo?: string
}

const ProtectedRoutes: React.FC<Props> = ({ children, userAuth, redirectTo = '/' }) => {
  if (!userAuth) {
    return <Navigate to={redirectTo}></Navigate>
  }

  return (children != null) || <><Outlet /><BottomBar/></>
}

export { ProtectedRoutes }
