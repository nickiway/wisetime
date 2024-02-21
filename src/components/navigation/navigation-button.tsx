"use client";

import Link from "next/link";
import { IconType } from "react-icons/lib";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface NavigationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  onClick: () => void;
  href: string;
  label: string;
}

export const NavigationButton = ({
  icon: Icon,
  className,
  label,
  href,
  onClick,
}: NavigationButtonProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="menu"
            className={className}
            onClick={onClick}
            asChild
          >
            <Link href={href}>
              <Icon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
