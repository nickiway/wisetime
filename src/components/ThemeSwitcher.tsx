"use client";

import { FC } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher: FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="gap-4 flex">
      <button className="bg-red-200" onClick={() => setTheme("dark")}>
        Dark
      </button>
      <button className="bg-green-200" onClick={() => setTheme("light")}>
        Light
      </button>
    </div>
  );
};

export default ThemeSwitcher;
