import { auth } from "@/auth";
import { PomodorroControllers } from "@/components/pomodorro-tracker/controllers";
import { PomodorroTimeDisplay } from "@/components/pomodorro-tracker/time-display";

export default async function PomodorroTimerPage() {
  const startTime = 60 * 25 * 1000;
  const session = await auth();
  return (
    <>
      <PomodorroTimeDisplay />
      <PomodorroControllers />
    </>
  );
}
