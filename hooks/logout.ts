"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    toast.success("Logged out successfully");
    router.push("/");
    Cookies.remove("token");
  };

  return logout;
};
