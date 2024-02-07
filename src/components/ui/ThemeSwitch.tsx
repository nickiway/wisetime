"use client";

import { FC } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch: FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="gap-4 flex">
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
};

export default ThemeSwitch;
