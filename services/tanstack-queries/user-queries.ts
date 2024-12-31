import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosAuthInstance } from "../axios/axios";
import { TUser } from "@/types/types";

interface UserResponse {
  data: TUser[];
}

export const useGetVerifiedUsers = () => {
  return useQuery<UserResponse>({
    queryKey: ["VerifiedUsers"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get("/user/verified");
      return response.data;
    },
  });
};

export const useGetUnverifiedUsers = () => {
  return useQuery({
    queryKey: ["UnVerifiedUsers"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get<UserResponse>(
        "/user/unverified"
      );
      return response.data;
    },
  });
};

export const useVerifyUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      rfidNumber,
    }: {
      id: string;
      rfidNumber: string;
    }) => {
      const response = await axiosAuthInstance.post(`/user/${id}/verify`, {
        rfidNumber,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["UnVerifiedUsers"] });
      queryClient.invalidateQueries({ queryKey: ["VerifiedUsers"] });
    },
  });
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["UserInfo"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get("/user");
      return response.data;
    },
  });
};
