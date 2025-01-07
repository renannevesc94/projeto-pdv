import { api } from "../clients/axiosClient";

type CategoriesType = {
  id: string;
  description: string;
};
type CredentialsType = {
  email: string;
  password: string;
};
export const getCategories = async () => {
  return await api.get<CategoriesType[]>("/categories");
};

export const postAuth = async ({ email, password }: CredentialsType) => {
  return await api.post("/auth/login", {
    email,
    password,
  });
};

export const getValidateLogin = async () => {
  return await api.get<{ role: string; userId: string }>("/auth/validate");
};
