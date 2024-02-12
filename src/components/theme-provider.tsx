"use client";

import { useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";

export const ThemeClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // checking if it mounted to except the hydration errror
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("test");
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <div>{children}</div>;
};
