"use client";
import { FaTags } from "react-icons/fa";
import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTask, toggleTimerTag } from "@/redux/slices/timeSessionRecordSlice";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const TaskEditorController = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tagsReducer.entities);
  const selectedTags = useAppSelector(
    (state) => state.timeSessionRecordSlice.tags
  );

  return (
    <div className="p-5 flex gap-x-10">
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(setTask(e.target.value));
        }}
        type="text"
        name="task"
        className="w-full"
        placeholder="Enter the task name"
      />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaTags color="gray" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select your tags</DropdownMenuLabel>
          {tags.map((tag) => {
            return (
              <DropdownMenuLabel key={tag._id.toString()} className="py-2">
                <Button
                  variant="default"
                  style={{
                    backgroundColor: selectedTags.has(tag._id.toString())
                      ? "gray"
                      : tag.color,
                    color: selectedTags.has(tag._id.toString())
                      ? "black"
                      : tag.textColor,
                  }}
                  className={"cursor-pointer w-full "}
                  asChild
                  onClick={() => {
                    dispatch(toggleTimerTag(tag._id.toString()));
                  }}
                >
                  <span>{tag.title}</span>
                </Button>
              </DropdownMenuLabel>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
