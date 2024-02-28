import { auth } from "@/auth";
import { AddTaskForm } from "@/components/tasks/add-task-form";

export default async function Tasks() {
  const session = await auth();

  return (
    <div>
      <AddTaskForm userId={session?.user?.id} />
    </div>
  );
}
