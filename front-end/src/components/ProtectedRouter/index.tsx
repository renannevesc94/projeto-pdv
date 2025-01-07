import { Outlet, useNavigate } from "react-router-dom";
import { useGetStateLogin } from "../../providers/AuthProvider/hooks/useGetValidateLogin";

type ProtectedRouterProps = {
  role?: string;
};

export const ProtectedRouter = ({ role }: ProtectedRouterProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetStateLogin(() => {
    navigate(-1);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data && role && data.role !== role) {
    navigate(-1);
    return null;
  }
  return <Outlet />;
};
