"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { IconType } from "react-icons/lib";

interface NavigationButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  href: string;
  onClick?: () => void;
  label?: string;
}

export const NavigationButton = ({
  icon: Icon,
  className,
  href,
  onClick,
}: NavigationButtonProps) => {
  return (
    <Button
      variant="link"
      className={cn("text-white", className)}
      onClick={onClick}
      asChild
    >
      <Link href={href}>
        <Icon />
      </Link>
    </Button>
  );
};
