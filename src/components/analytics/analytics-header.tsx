import { textAbstract } from "@/utils/text-abstract";

import { SearchForm } from "@/components/shared/search-form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Flex } from "@/components/ui/flex";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface AnalyticsHeaderProps {
  image: string;
  email: string;
}
export const AnalyticsHeader = async ({
  email,
  image,
}: AnalyticsHeaderProps) => {
  return (
    <div className="p-5 shadow-xl flex gap-x-10 bg-white">
      <SearchForm className="w-4/5 relative" />

      {/* TOOD : implement navigation menu */}
      <Flex>
        <UserAvatar imageAlt="Avatar" imageUri={image} />
        <Flex className="flex-col px-5">
          <CardTitle>Test</CardTitle>
          <CardDescription>{textAbstract(email, 30)}</CardDescription>
        </Flex>
      </Flex>
    </div>
  );
};
