import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { BottomBar } from '../components/navigation/BottomBar'

interface Props {
  children?: React.FC | null
  userAuth: boolean
  redirectTo?: string
}

const ProtectedRoutes: React.FC<Props> = ({ userAuth, redirectTo = '/' }) => {
  if (!userAuth) {
    return <Navigate to={redirectTo}></Navigate>
  }
  return <><Outlet /><BottomBar/></>
}

export { ProtectedRoutes }
