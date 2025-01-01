import { useQuery } from "@tanstack/react-query";
import { axiosAuthInstance } from "../axios/axios";

export const useGetTransaction = () => {
  return useQuery({
    queryKey: ["Transaction"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get("/transaction/history");
      return response.data;
    },
  });
};
