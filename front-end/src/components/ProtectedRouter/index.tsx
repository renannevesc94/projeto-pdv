import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export const ProtectedRouter = () => {
  const isAuthenticated = useAuth();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};
