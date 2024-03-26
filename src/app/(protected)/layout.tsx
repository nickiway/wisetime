import { Navigation } from "@/components/navigation/navigation";
import { Toaster } from "@/components/ui/toaster";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="flex">
      <Navigation />
      <Toaster />
      <main className="w-full overflow-scroll bg-zinc-100">{children}</main>
    </body>
  );
}
