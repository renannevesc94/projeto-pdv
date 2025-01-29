import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../../utils/use-debounce";

export const useGetProducts = () => {
  const [searchParams] = useSearchParams();
  const description = searchParams.get("description") || "";
  const categoryId = searchParams.get("categoryId");
  const supplierId = searchParams.get("supplierId");
  const debouncedDescription = useDebounce(description, 500);

  const searchParamToString = searchParams.toString();
  const searchOptions = {
    description: debouncedDescription,
    categoryId,
    supplierId,
  };

  return useQuery({
    queryKey: ["GETPRODUCTS", searchOptions],
    queryFn: async () => {
      const queryString = searchParamToString;
      const { data } = await getProducts(queryString);
      return data;
    },
    enabled:
      debouncedDescription.length >= 3 || !!supplierId || !!categoryId || !searchParamToString,
    staleTime: 1000,
  });
};
