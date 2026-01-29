import { ReactNode } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "react-hot-toast";
import AppInitProvider from "../providers/app-init";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <SidebarProvider>
        <AppSidebar className="border-none" />
        <main className="flex w-full">
          <SidebarTrigger className="h-screen border rounded-none" />
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full">
              <AppInitProvider>{children}</AppInitProvider>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
