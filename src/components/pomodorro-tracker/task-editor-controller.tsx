"use client";
import { FaTags } from "react-icons/fa";
import { ChangeEvent } from "react";

import { useTags } from "@/hooks/useTags";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTask, toggleTimerTag } from "@/redux/slices/timeSessionRecordSlice";

import { Input } from "@/components/ui/input";

import { Session } from "next-auth";
import { TagsPicker } from "../shared/tags-picker";
import ProjectsPicker from "@/components/projects-picker";

export const TaskEditorController = ({
  session,
}: {
  session: Session | null;
}) => {
  const dispatch = useAppDispatch();
  const tags = useTags(session?.user?.id || "");

  const selectedTags = useAppSelector(
    (state) => state.timeSessionRecordSlice.tags
  );

  return (
    <div className="p-5 flex gap-x-10 ">
      {/* input for task name */}
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(setTask(e.target.value));
        }}
        type="text"
        name="task"
        placeholder="Enter the task name"
        className="w-full"
      />

      {/* projects picker */}
      <ProjectsPicker _id={session?.user?.id} />

      {/* tags picker */}
      <TagsPicker
        selectedTags={selectedTags}
        tags={tags}
        onClickCb={(_id: string) => {
          dispatch(toggleTimerTag(_id));
        }}
        label="Select Tags"
      />
    </div>
  );
};
