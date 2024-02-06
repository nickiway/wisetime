"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const ThemeClientProvider = ({ children }: { children: React.ReactNode }) => {
  // checking if it mounted to except the hydration errror
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeClientProvider;
