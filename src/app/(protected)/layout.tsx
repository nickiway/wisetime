import { Navigation } from "@/components/navigation/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <Navigation className="h-full  flex flex-col justify-center bg-zinc-950 " />
      {children}
    </div>
  );
}
