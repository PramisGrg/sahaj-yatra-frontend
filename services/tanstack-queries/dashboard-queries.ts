import { useQuery } from "@tanstack/react-query";
import { axiosAuthInstance } from "../axios/axios";

export interface TSuperAdminDashbaordData {
  data: {
    userCount: number;
    adminCount: number;
    busCount: number;
  };
}

export const useGetSuperAdminDashboardData = () => {
  return useQuery<TSuperAdminDashbaordData>({
    queryKey: ["AdminDashboard"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get<TSuperAdminDashbaordData>(
        "/dashboard/superadmin"
      );
      return response.data;
    },
  });
};
