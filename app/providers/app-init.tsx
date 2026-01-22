"use client";

import { useAtom } from "jotai";
import { useState, useEffect, ReactNode } from "react";
import { userAtom } from "@/lib/store";
import { User, ApiResponse } from "@/lib/types";

export default function AppInitProvider({ children }: { children: ReactNode }) {
  const [, setUser] = useAtom(userAtom);
  const [isInitialized, setIsInitialized] = useState(false);

  const getUserInfo = async () => {
    try {
      const response = await fetch("/api/user-info");
      const data: ApiResponse<User> = await response.json();

      if (!response.ok || !data.success || !data.data) {
        throw new Error(data.message || "Failed to fetch user info");
      }

      setUser(data.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      setUser(null);
    } finally {
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [setUser]);

  if (!isInitialized) {
    return "Verifying session...";
  }

  return <>{children}</>;
}
