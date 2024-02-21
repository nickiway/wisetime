import { IconType } from "react-icons/lib";

import { cn } from "@/lib/utils";
import { NavigationButton } from "@/components/navigation/navigation-button";

interface NavigationListProps extends React.HTMLAttributes<HTMLDivElement> {
  list: { id: number; label: string; href: string; icon: IconType }[];
  activeButtonId: number;
  setActiveButton: (id: number) => void;
}
export const NavigationList = ({
  list,
  activeButtonId,
  className,
  setActiveButton,
}: NavigationListProps) => {
  return (
    <div className={cn("h-1/2 flex flex-col gap-y-5", className)}>
      {list.map(({ id, href, icon, label }) => {
        return (
          <NavigationButton
            key={id}
            href={href}
            icon={icon}
            label={label}
            className={activeButtonId === id ? "bg-white text-black" : ""}
            onClick={() => setActiveButton(id)}
          />
        );
      })}
    </div>
  );
};
