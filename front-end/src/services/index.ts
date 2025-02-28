import { apiPdv } from "@/clients/axiosClient";
import { AuthType } from "@/modules/auth/types";
import { NewProductType } from "@/modules/products/types";

export async function postAuth({ email, password }: AuthType) {
  return await apiPdv.post("/auth/login", { email, password });
}

export async function getProducts() {
  return await apiPdv.get("/products");
}

export async function getProductById(id: string) {
  return await apiPdv.get(`/products/${id}`);
}

export async function postProduct(data: NewProductType) {
  return await apiPdv.post("/products", data);
}

export async function deleteProduct(id: string) {
  return await apiPdv.delete(`/products/${id}`);
}
