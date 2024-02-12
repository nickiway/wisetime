import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/buttton";

export const Socials = () => {
  return (
    <div className="w-full">
      <Button variant="outline" className="w-1/2" onClick={() => {}}>
        <FcGoogle />
      </Button>

      <Button variant="outline" className="w-1/2" onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  );
};
