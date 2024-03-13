import { StopWatch } from "@/components/stop-watch/stop-watch";
import { Navigation } from "@/components/navigation/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="flex">
      <Navigation />

      <main className="w-full overflow-scroll bg-zinc-100">
        {/* helper panel */}
        <div className="flex justify-end p-5 items-center gap-5">
          <StopWatch />
        </div>
        {/* children */}
        {children}
      </main>
    </body>
  );
}
