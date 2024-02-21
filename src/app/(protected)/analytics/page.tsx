import { auth } from "@/auth";

import { AnalyticsHeader } from "@/components/analytics/analytics-header";

export default async function AnalyticsPage() {
  const session = await auth();

  return (
    <div className="w-full">
      <AnalyticsHeader
        image={session?.user?.image || ""}
        email={session?.user?.email || ""}
      />
    </div>
  );
}
