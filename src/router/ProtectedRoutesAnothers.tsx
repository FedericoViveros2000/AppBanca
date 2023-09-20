import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

interface Props {
  children?: React.FC | null
  userAuth: boolean
  redirectTo?: string
}

const ProtectedRoutesAnothers: React.FC<Props> = ({ userAuth, redirectTo = '/' }) => {
  if (!userAuth) {
    return <Navigate to={redirectTo}></Navigate>
  }
  return <Outlet />
}

export { ProtectedRoutesAnothers }
