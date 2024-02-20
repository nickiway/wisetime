import { auth, signOut } from "@/auth";

import { UserAvatar } from "@/components/settings/user-avatar";

export default async function Settings() {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>

      <UserAvatar imageUri={session?.user?.image || ""} imageAlt="My Profile" />
      {JSON.stringify(session)}
    </div>
  );
}
