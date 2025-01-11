import { api } from "../clients/axiosClient";

type CategoriesType = {
  id: string;
  description: string;
};
type CredentialsType = {
  email: string;
  password: string;
};

type GetProductsType = {
  id: string;
  categoryId: number;
  cost: number;
  created_at: string;
  description: string;
  ean: string;
  imageUrl: string;
  min_stock: number;
  price: number;
  status: boolean;
  stock: number;
  supplierId: number;
  tags: string;
  unit: string;
  updated_at: string;
};

export const getCategories = async () => {
  return await api.get<CategoriesType[]>("/categories");
};

export const getProducts = async () => {
  return await api.get<GetProductsType[]>("/products");
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
