"use client";
import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { NavigationList } from "./navigation-list";
import { MENU_LIST, EXTRA_MENU } from "@/constants/nav";

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navigation = ({ className: navBarClassName }: NavigationProps) => {
  const pathname = usePathname();

  const [activeButtonId, setActiveButtonId] = useState<number>(() => {
    const menuItem = MENU_LIST.find((item) => item.href === pathname);

    return menuItem?.id || -1;
  });

  const onClick = (id: number) => {
    setActiveButtonId(id);
  };

  return (
    <header className={navBarClassName}>
      <div className="h-1/4 text-3xl text-white text-center py-10">
        <Link href="/">W</Link>
      </div>

      <nav className="h-3/4 p-2">
        {/* main menu */}
        <section className="h-1/2 flex flex-col gap-y-5">
          <NavigationList
            list={MENU_LIST}
            activeButtonId={activeButtonId}
            onClick={onClick}
          />
        </section>

        {/* additional menu */}
        <section className="h-1/2 flex flex-col gap-y-5 justify-end">
          <NavigationList
            list={EXTRA_MENU}
            activeButtonId={activeButtonId}
            onClick={onClick}
          />
        </section>
      </nav>
    </header>
  );
};
