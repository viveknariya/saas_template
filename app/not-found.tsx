"use client";

import PageHero from "@/components/hero";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const heroData = {
    title: "404 - Not Found",
    description:
      "Could not find the requested resource. return to home in 2 seconds...",
  };
  return <PageHero heroData={heroData} />;
}
