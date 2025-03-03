import { getProductById } from "@/services";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductById(id: string) {
  return useQuery({
    queryKey: ["GETPRODUCTBYID", id],
    queryFn: async () => {
      const { data } = await getProductById(id);
      return data;
    },
    enabled: false,
  });
}
