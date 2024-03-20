import { MinimizedTimeTracker } from "@/components/time-tracker-components/mimized-time-tracker";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MinimizedTimeTracker />

      {children}
    </>
  );
}
