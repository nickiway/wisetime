import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button type="button" variant="link" className="w-full font-normal" asChild>
      <Link className="" href={href}>
        {label}
      </Link>
    </Button>
  );
};
