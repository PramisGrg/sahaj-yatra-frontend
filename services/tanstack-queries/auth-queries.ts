import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";
import { TregisterUserSchema } from "@/app/(auth)/user/register/page";
import { TRegisterBusOwnerSchema } from "@/app/(auth)/busowner/register/page";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (values: TregisterUserSchema) => {
      const response = await axiosInstance.post("/auth/register", values);
      return response.data;
    },
  });
};

export const useRegisterBusOwner = () => {
  return useMutation({
    mutationFn: async (values: TRegisterBusOwnerSchema) => {
      const response = await axiosInstance.post("/auth/register/admin", values);
      return response.data;
    },
  });
};
