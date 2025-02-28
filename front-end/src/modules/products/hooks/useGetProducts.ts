import { getProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function useGetProducts() {
  return useQuery({
    queryKey: ["PRODUCTSGET"],
    queryFn: async () => {
      const { data } = await getProducts();
      return data;
    },
  });
}
