import { auth } from "@/auth";

import { TimeTrackerControllers } from "@/components/time-tracker-components/time-trackers-controllers";
import { TimeTrackerCycleList } from "@/components/time-tracker-components/time-tracker-cycle-list";
import { TimeTrackerDisplay } from "@/components/time-tracker-components/time-tracker-display";

export default async function TimerPage() {
  const session = await auth();

  return (
    <div>
      <TimeTrackerDisplay className="text-6xl p-10" />
      <TimeTrackerControllers session={session} />
      <TimeTrackerCycleList />
    </div>
  );
}
