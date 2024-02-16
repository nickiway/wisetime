import Link from "next/link";
import { Button } from "@/components/ui/buttton";

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center">
      <Button variant="link" asChild className="w-1/2 h-1/5 text-2xl">
        <Link href="/auth/login">Sign In</Link>
      </Button>
    </main>
  );
}
