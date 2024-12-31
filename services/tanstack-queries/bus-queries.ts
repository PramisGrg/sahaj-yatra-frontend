import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosAuthInstance } from "../axios/axios";
import { TRegisterBusSchema } from "@/app/(dashboard)/dashboard/busowner/components/add-bus";
import { useQueryClient } from "@tanstack/react-query";

export const UseGetBus = () => {
  return useQuery({
    queryKey: ["Bus"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get("/bus/owner");
      return response.data;
    },
  });
};

export const useGetAllBus = () => {
  return useQuery({
    queryKey: ["Bus"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get("/bus");
      return response.data;
    },
  });
};

export const useRegisterBus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: TRegisterBusSchema) => {
      const response = await axiosAuthInstance.post("/bus", values);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Bus"] });
    },
  });
};
