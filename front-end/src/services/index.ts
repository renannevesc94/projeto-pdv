import { api } from "../clients/axiosClient";

type Categories = {
  id: string;
  description: string;
};
export const getCategories = async () => {
  return await api.get<Categories[]>("/categories");
};
