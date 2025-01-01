import { useQuery } from "@tanstack/react-query";
import { axiosAuthInstance } from "../axios/axios";

export interface TSuperAdminDashbaordData {
  data: {
    userCount: number;
    adminCount: number;
    busCount: number;
  };
}

interface TBusOwnerDashboardData {
  data: {
    graphData: Array<{
      busName: string;
      sale: {
        daily: string;
        monthly: string;
        yearly: string;
      };
    }>;
    totalDailySale: string;
    totalMonthlySale: string;
    totalYearlySale: string;
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

export const useGetBusownerDashboardData = () => {
  return useQuery<TBusOwnerDashboardData>({
    queryKey: ["BusOwnerDashboard"],
    queryFn: async () => {
      const response = await axiosAuthInstance.get<TBusOwnerDashboardData>(
        "/dashboard/busowner"
      );
      return response.data;
    },
  });
};
