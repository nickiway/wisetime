import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  imageUri: string;
  imageAlt: string;
  classes?: string;
}
export const UserAvatar = ({
  imageUri,
  imageAlt,
  classes,
}: UserAvatarProps) => {
  return (
    <Avatar className={classes}>
      <AvatarImage src={imageUri} />
      <AvatarFallback>{imageAlt}</AvatarFallback>
    </Avatar>
  );
};
