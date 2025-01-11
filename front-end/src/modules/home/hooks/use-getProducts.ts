import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GETPRODUCTS"],
    queryFn: async () => {
      const { data } = await getProducts();
      return data;
    },
  });
};
