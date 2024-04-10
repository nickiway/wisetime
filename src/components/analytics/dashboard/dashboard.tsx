"use client";
import { useSession } from "next-auth/react";
import { useAnalytics } from "@/hooks/useAnalytics";

import { ListChecksIcon, Clock10Icon } from "lucide-react";

import { AnalyticsDashboardCard } from "@/components/analytics/dashboard/card";

export const AnalyticsDashboard = () => {
  const { data: session } = useSession();

  const { timeSessions, totalWorkHours } = useAnalytics(session?.user.id);

  console.log(timeSessions, totalWorkHours);
  return (
    <section className="flex gap-x-5">
      <AnalyticsDashboardCard
        title="Hours"
        data={totalWorkHours}
        Icon={Clock10Icon}
        key={1}
        dataType="hh"
        size={{
          width: "25%",
        }}
        description="The number of hours under work during the seleceted time period"
      />
      <AnalyticsDashboardCard
        title="Time Sessions"
        data={timeSessions}
        Icon={ListChecksIcon}
        key={2}
        dataType="sessions"
        size={{
          width: "25%",
        }}
        description="The number of sessions you've completed during the seleceted time period"
      />
    </section>
  );
};
