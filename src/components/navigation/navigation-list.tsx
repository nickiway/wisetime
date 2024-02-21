import { IconType } from "react-icons/lib";

import { NavigationButton } from "@/components/navigation/navigation-button";

interface NavigationListProps {
  list: { id: number; label: string; href: string; icon: IconType }[];
  activeButtonId: number;
  onClick: (id: number) => void;
}
export const NavigationList = ({
  list,
  activeButtonId,
  onClick,
}: NavigationListProps) => {
  return (
    <>
      {list.map(({ id, href, icon, label }) => {
        return (
          <NavigationButton
            key={id}
            href={href}
            icon={icon}
            label={label}
            className={activeButtonId === id ? "bg-white text-black " : ""}
            onClick={() => onClick(id)}
          />
        );
      })}
    </>
  );
};
