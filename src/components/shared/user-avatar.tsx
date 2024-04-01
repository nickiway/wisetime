import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HTMLAttributes } from "react";

interface UserAvatarProps extends HTMLAttributes<HTMLImageElement> {
  imageUri: string;
  imageAlt: string;
}
export const UserAvatar = ({
  imageUri,
  imageAlt,
  className,
}: UserAvatarProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUri} />
      <AvatarFallback>{imageAlt}</AvatarFallback>
    </Avatar>
  );
};
