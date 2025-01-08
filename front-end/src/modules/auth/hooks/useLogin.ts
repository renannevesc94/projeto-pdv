import { useForm } from "react-hook-form";
import { AuthSchema, AuthType } from "../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostAuth } from "./usePostAuth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
  });

  const { mutate, error } = usePostAuth({
    onSuccess: () => {
      navigate("/home", { replace: true });
    },

    onError: (err) => {
      return err.status === 401 ? "Acesso não autorizado" : err.message;
    },
  });

  const onSubmit = (data: AuthType) => {
    mutate(data);
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    error,
  };
};
