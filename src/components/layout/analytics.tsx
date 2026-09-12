"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";

export function Analytics() {
  useEffect(() => {
    void initAnalytics();
  }, []);

  return null;
}
