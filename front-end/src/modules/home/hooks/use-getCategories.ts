import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategories } from "../../../services";

export const useGetCategories = () => {
  return useSuspenseQuery({
    queryKey: ["CATEGORIES"],
    queryFn: async () => {
      const { data } = await getCategories();
      return data;
    },
    retry: 0,
  });
};
