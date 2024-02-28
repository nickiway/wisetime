import Link from "next/link";
import { HTMLAttributes } from "react";

import { Button } from "@/components/ui/button";

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
    <ul>
      <li className="flex items-center">
        <h1 className="w-full text-2xl p-5 capitalize">{title}</h1>
        <Button variant="default" asChild>
          <Link href="/tasks">Show more</Link>
        </Button>
      </li>
      {list.map(({ id, name, description, deadline }) => {
        return (
          <li key={id} className={className}>
            <p className="text-xl">{name}</p>
            <p className="text-muted-foreground text-xs">{description}</p>
          </li>
        );
      })}
    </ul>
  );
};
