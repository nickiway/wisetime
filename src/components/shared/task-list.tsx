import Link from "next/link";

import { TaskFilterPannel } from "@/components/shared/filter-pannel";
import { TaskListItem } from "@/components/shared/task-list-item";
import { Button } from "@/components/ui/button";

interface TaskListProps {
  list: {
    id: string;
    name: string;
    priority: string;
    deadline: Date;
    tags?: string[];
    description?: string;
  }[];

  title?: string;
  showAllTasksButton?: boolean;
}

export const TaskList = ({
  list,
  title,
  showAllTasksButton,
}: TaskListProps) => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="title">{title}</h1>

        {showAllTasksButton && (
          <Button variant="default" asChild>
            <Link href="/tasks">Show more</Link>
          </Button>
        )}
      </div>

      <TaskFilterPannel />

      <ul>
        <li className="flex p-5">
          <div className="w-2/4">
            <p className="text-xl">#Work</p>
          </div>
          <div className="w-1/4">Due Date</div>
          <div className="w-1/4">Priority</div>
        </li>

        {list.map(({ id, ...props }) => (
          <TaskListItem key={id} {...props} />
        ))}
      </ul>
    </>
  );
};
