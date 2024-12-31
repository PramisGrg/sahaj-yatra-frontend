import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";
import { TregisterUserSchema } from "@/app/(auth)/user/register/page";
import { TRegisterBusOwnerSchema } from "@/app/(auth)/busowner/register/page";
import { TSuperadminLoginSchema } from "@/app/(auth)/superadmin/login/page";
import { TLoginSchema } from "@/app/(auth)/user/login/page";
import { toast } from "sonner";
import { AxiosError } from "axios";

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

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (values: TLoginSchema) => {
      const response = await axiosInstance.post("/auth/login", values);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      } else {
        toast.error("unexpected error has occured");
      }
    },
  });
};

export const useLoginBusOwner = () => {
  return useMutation({
    mutationFn: async (values: TLoginSchema) => {
      const response = await axiosInstance.post("/auth/login/admin", values);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      } else {
        toast.error("unexpected error has occured");
      }
    },
  });
};

export const useLoginSuperAdmin = () => {
  return useMutation({
    mutationFn: async (values: TSuperadminLoginSchema) => {
      const response = await axiosInstance.post(
        "/auth/login/superadmin",
        values
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      } else {
        toast.error("unexpected error has occured");
      }
    },
  });
};
