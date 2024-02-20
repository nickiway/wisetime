import { NavigationButton } from "@/components/navigation/navigation-button";
import { IconType } from "react-icons/lib";

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
      {list.map((item) => {
        return (
          <NavigationButton
            key={item.id}
            href={item.href}
            icon={item.icon}
            className={
              "text-xl hover:bg-white hover:text-black " +
              (activeButtonId === item.id ? "bg-white text-black " : "")
            }
            onClick={() => onClick(item.id)}
          />
        );
      })}
    </>
  );
};
