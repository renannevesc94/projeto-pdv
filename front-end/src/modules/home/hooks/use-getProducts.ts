import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services";
import { useSearchParams } from "react-router-dom";

export const useGetProducts = () => {
  const [searchParams] = useSearchParams();

  return useQuery({
    queryKey: ["GETPRODUCTS", searchParams.toString()],
    queryFn: async () => {
      const queryString = searchParams.toString();
      const { data } = await getProducts(queryString);
      return data;
    },
  });
};
