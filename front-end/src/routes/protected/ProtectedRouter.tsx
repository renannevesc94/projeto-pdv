import { Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

type ProtectedRouterProps = {
  role?: string;
};

export const ProtectedRouter = ({ role }: ProtectedRouterProps) => {
  const { hasAccess, isLoading } = useAuth(role);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return hasAccess ? <Outlet /> : null;
};
