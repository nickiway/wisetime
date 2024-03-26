import { auth } from "@/auth";
import { PomodorroControllers } from "@/components/pomodorro-tracker/controllers";
import { PomodorroLogicModule } from "@/components/pomodorro-tracker/logic-module";
import { PomodorroDisplay } from "@/components/pomodorro-tracker/display";
import { TaskEditorController } from "@/components/pomodorro-tracker/task-editor-controller";

export default async function PomodorroTimerPage() {
  const session = await auth();

  return (
    <>
      <TaskEditorController session={session} />
      <PomodorroDisplay />
      <PomodorroLogicModule />
      <PomodorroControllers session={session} />
    </>
  );
}
