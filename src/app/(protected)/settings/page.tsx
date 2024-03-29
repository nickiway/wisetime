import { auth } from "@/auth";

import { UserAvatar } from "@/components/shared/user-avatar";
import { SignOutButton } from "@/components/settings/sign-out-button";

export default async function Settings() {
  const session = await auth();

  return (
    <div>
      <SignOutButton />
      <UserAvatar imageUri={session?.user?.image || ""} imageAlt="My Profile" />
      {JSON.stringify(session)}
    </div>
  );
}
