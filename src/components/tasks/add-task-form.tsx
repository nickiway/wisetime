"use client";

import { Button } from "@/components/ui/button";
import { addTask } from "@/actions/add-task";

export const AddTaskForm = ({ userId }: { userId: string | undefined }) => {
  const onSubmit = async (e: Event) => {
    e.preventDefault();

    await addTask(userId);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
