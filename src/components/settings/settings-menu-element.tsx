"use client";

import { HTMLAttributes, useContext } from "react";

import { TabContext, type TabType } from "./settings";
import { Button } from "../ui/button";

interface ISettingsMenuElementProps extends HTMLAttributes<HTMLButtonElement> {
  path: TabType;
}

export const SettingsMenuElement = ({
  children,
  path,
}: ISettingsMenuElementProps) => {
  const { tabValue, setTabValue } = useContext(TabContext);

  return (
    <Button
      variant={tabValue === path ? "secondary" : "link"}
      onClick={() => setTabValue(path)}
      className="cursor-pointer w-full flex justify-start"
    >
      {children}
    </Button>
  );
};
