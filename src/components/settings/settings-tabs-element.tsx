"use client";

import { ReactNode, useContext } from "react";

import { TabContext, type TabType } from "./settings";

interface ISettingsTabsElementProps {
  pathToMatch: TabType;
  children: ReactNode;
}

export const SettingsTabsElement = ({
  pathToMatch,
  children,
}: ISettingsTabsElementProps) => {
  const { tabValue } = useContext(TabContext);
  if (tabValue !== pathToMatch) {
    return;
  }

  return <div>{children}</div>;
};
