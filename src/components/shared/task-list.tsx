import Link from "next/link";
import { HTMLAttributes } from "react";

import { TaskFilterPannel } from "@/components/shared/filter-pannel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TaskListProps extends HTMLAttributes<HTMLDivElement> {
  list: {
    id: string;
    name: string;
    priority: string;
    deadline: Date;
    tags?: string[];
    description?: string;
  }[];
  title?: string;
}

export const TaskList = ({ className, list, title }: TaskListProps) => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="w-full text-2xl p-5 capitalize">{title}</h1>
        <Button variant="default" asChild>
          <Link href="/tasks">Show more</Link>
        </Button>
      </div>

      <TaskFilterPannel />

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>#Work</th>
            <th>Due Date</th>
            <th className="w-6">Priority</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, name, description, deadline, priority }) => {
            return (
              <tr key={id}>
                <td className="">
                  <p className="text-xl">{name}</p>
                  <p className="text-muted-foreground text-xs">{description}</p>
                </td>
                <td>{deadline.toLocaleDateString()}</td>
                <td>{priority}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
