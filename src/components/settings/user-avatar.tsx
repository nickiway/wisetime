import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  imageUri?: string;
  imageAlt?: string;
}
export const UserAvatar = ({
  imageUri,
  imageAlt = "My Avatar",
}: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={imageUri} />
      <AvatarFallback>{imageAlt}</AvatarFallback>
    </Avatar>
  );
};
