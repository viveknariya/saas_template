import {ReactNode} from "react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "react-hot-toast";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <SidebarProvider>
        <AppSidebar className="border-none" />
        <main className="flex w-full">
          <SidebarTrigger className="h-screen flex justify-center items-center border rounded-none" />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
