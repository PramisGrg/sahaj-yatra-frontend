"use client";
import {
  ChevronUp,
  MapPin,
  Home,
  DollarSign,
  Settings,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useLogout } from "@/hooks/logout";
import { useGetInfo } from "@/services/tanstack-queries/auth-queries";
import { useUserIdStore } from "@/store/token-store";
import { useEffect } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/user",
    icon: Home,
  },
  {
    title: "Location",
    url: "/dashboard/user/location",
    icon: MapPin,
  },

  {
    title: "Transaction",
    url: "/dashboard/user/transaction",
    icon: DollarSign,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const logout = useLogout();
  const { data: userInfo } = useGetInfo();
  const userInfoData = userInfo?.data;
  const setUserId = useUserIdStore((state) => state.setUserId);

  useEffect(() => {
    if (userInfoData?._id) {
      setUserId(userInfoData?._id);
    }
  }, [setUserId, userInfoData?._id]);

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="text-xl text-center">
            <Link href={"/"}>Sahaj Yatra</Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span onClick={logout}>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
