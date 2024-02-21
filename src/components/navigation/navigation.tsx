"use client";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { NavigationList } from "./navigation-list";
import { MENU_LIST, EXTRA_MENU } from "@/constants/nav";

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navigation = ({ className }: NavigationProps) => {
  const pathname = usePathname();

  const [activeButtonId, setActiveButtonId] = useState<number>(() => {
    return MENU_LIST.find((item) => item.href === pathname)?.id || -1;
  });

  const onClick = (id: number) => {
    setActiveButtonId(id);
  };

  return (
    <header className={className}>
      <div className="h-1/4 text-3xl text-white text-center py-10">
        <Link href="/">W</Link>
      </div>

      <nav className="h-3/4 p-2">
        <NavigationList
          list={MENU_LIST}
          activeButtonId={activeButtonId}
          setActiveButton={onClick}
        />

        <NavigationList
          list={EXTRA_MENU}
          className="justify-end"
          activeButtonId={activeButtonId}
          setActiveButton={onClick}
        />
      </nav>
    </header>
  );
};
