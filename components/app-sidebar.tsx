"use client";
import * as React from "react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavMain } from "./nav-main";
import {
  DollarSign,
  Home,
  Inbox,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import { NavSecondary } from "./nav-secondary";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
    navSecondary: [
      {
        title: "Info",
        url: "/user-info",
        icon: User,
      },
      {
        title: "Billing",
        url: "/user-billing",
        icon: DollarSign,
      },

      {
        title: "Logout",
        url: "/logout",
        icon: LogOut,
      },
    ],
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 font-bold px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center border border-black">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <span className="text-xl">Zallyy</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <NavMain items={data.navMain} />
        </SidebarGroup>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
