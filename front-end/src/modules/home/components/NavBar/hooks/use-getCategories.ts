import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../../../services";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: async () => {
      const { data } = await getCategories();
      return data;
    },
    enabled: true,
  });
};
