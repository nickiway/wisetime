import { cn } from "@/lib/utils";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Flex = ({ children, className }: FlexProps) => {
  return <div className={cn("flex", className)}>{children}</div>;
};
