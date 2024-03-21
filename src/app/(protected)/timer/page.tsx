import { auth } from "@/auth";

import { TimeTrackerControllers } from "@/components/time-tracker-components/time-trackers-controllers";
import { TimeTrackerTable } from "@/components/time-tracker-components/time-tracker-table";
import { TimeTrackerDisplay } from "@/components/time-tracker-components/time-tracker-display";

export default async function TimerPage() {
  const session = await auth();

  return (
    <div>
      <section className="flex p-5 items-center">
        <TimeTrackerControllers session={session} />

        <div className="w-[10%]">
          <TimeTrackerDisplay />
        </div>
      </section>
      {/* TimeTrackerTableControllers */}
      <TimeTrackerTable session={session} />
    </div>
  );
}
