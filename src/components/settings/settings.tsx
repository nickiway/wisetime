"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, createContext, useState } from "react";

export type TabType = "profile" | "pomodrro" | "contacts";

export type TabContextType = {
  tabValue: TabType;
  setTabValue: React.Dispatch<React.SetStateAction<TabType>>;
};

export const TabContext = createContext<TabContextType>({
  tabValue: "profile",
  setTabValue: () => {},
});

export interface ISettingsProps extends HTMLAttributes<HTMLDivElement> {}

export const Settings = ({ children, className }: ISettingsProps) => {
  const [tabValue, setTabValue] = useState<TabType>("profile");

  const contextValue: TabContextType = {
    tabValue,
    setTabValue,
  };

  return (
    <TabContext.Provider value={contextValue}>
      <section className={cn("flex", className)}>{children}</section>
    </TabContext.Provider>
  );
};
