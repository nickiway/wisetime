import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Socials = () => {
  const onClick = async (providers: "github" | "google") => {
    await signIn(providers, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full">
      <Button
        variant="outline"
        className="w-1/2"
        onClick={() => onClick("google")}
      >
        <FcGoogle />
        <span className="mx-1">Google</span>
      </Button>

      <Button
        variant="outline"
        className="w-1/2"
        onClick={() => onClick("github")}
      >
        <FaGithub />
        <span className="mx-1">GitHub</span>
      </Button>
    </div>
  );
};
