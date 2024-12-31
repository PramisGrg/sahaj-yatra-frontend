import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    router.push("/");
    Cookies.remove("token");
  };

  return logout;
};
