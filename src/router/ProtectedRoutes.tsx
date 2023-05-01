import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
interface Props {
  children?: React.ReactElement | null;
  userAuth: boolean;
  redirectTo?: string;
}

const ProtectedRoutes = ({ children, userAuth, redirectTo = "/" }: Props) => {  
  if (!userAuth) {
    return <Navigate to={redirectTo}></Navigate>;
  }
  return children || <Outlet />;
};

export { ProtectedRoutes };
