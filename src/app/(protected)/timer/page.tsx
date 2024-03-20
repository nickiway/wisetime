import { auth } from "@/auth";

import { TimeTrackerControllers } from "@/components/time-tracker-components/time-trackers-controllers";
import { TimeTrackerCycleList } from "@/components/time-tracker-components/time-tracker-cycle-list";
import { TimeTrackerDisplay } from "@/components/time-tracker-components/time-tracker-display";

export default async function TimerPage() {
  const session = await auth();

  return (
    <div>
      <section className="flex  p-5 items-center">
        <TimeTrackerControllers session={session} />

        <div className="w-[10%]">
          <TimeTrackerDisplay />
        </div>
      </section>

      <TimeTrackerCycleList />
    </div>
  );
}
