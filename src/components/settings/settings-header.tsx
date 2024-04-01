import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type VariantType = "lg" | "md" | "sm";
export interface ISettingsHeaderProps
  extends HTMLAttributes<HTMLParagraphElement> {
  variant: VariantType;
}
export const SettingsHeader = ({
  variant,
  className,
  children,
}: ISettingsHeaderProps) => {
  const classToVariant = {
    lg: "text-4xl",
    md: "text-lg",
    sm: "text-sm",
  };

  return <p className={cn(className, classToVariant[variant])}>{children}</p>;
};
