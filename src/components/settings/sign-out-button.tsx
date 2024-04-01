import { LogOut, TimerIcon, Settings } from "lucide-react";
import { signOut } from "@/auth";

import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signOut({ redirectTo: "/" });
      }}
    >
      <Button
        type="submit"
        variant="link"
        className="w-full text-destructive flex justify-start"
      >
        <LogOut className="mr-3" />
        <span>Sign Out</span>
      </Button>
    </form>
  );
};
