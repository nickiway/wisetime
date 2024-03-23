"use client";

import { Session } from "next-auth";
import { FaTags, FaFolder } from "react-icons/fa";

import { storeTimerSession } from "@/actions/timer";
import { useTimer } from "@/hooks/useTimer";

import {
  setTaskName,
  start,
  stop,
  toggleTimerTag,
} from "@/redux/slices/timerSlice";
import {} from "@/redux/slices/timerTableSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTags } from "@/hooks/useTags";
import { ChangeEvent } from "react";
import { incrementTick } from "@/redux/slices/timerSlice";

interface TimeTrackerControllersProps {
  session: Session | null;
}

export const TimeTrackerControllers = ({
  session,
}: TimeTrackerControllersProps) => {
  const dispatch = useAppDispatch();
  const tags = useTags(session?.user?.id || "");

  const isTimerOn = useAppSelector((state) => state.timerReducer.isTurn);
  const totalTicks = useAppSelector((state) => state.timerReducer.totalTicks);
  const taskName = useAppSelector((state) => state.timerReducer.taskName);
  const selectedTags = useAppSelector((state) => state.timerReducer.tags);

  useTimer(isTimerOn, () => {
    dispatch(incrementTick(1000));
  });

  const onStop = async () => {
    if (!session) {
      return;
    }

    const response = await storeTimerSession({
      totalTicks,
      userId: session?.user?.id,
      taskName,
      selectedTags,
      project: "",
      date: new Date(),
    });

    return response;
  };

  return (
    <>
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(setTaskName(e.target.value));
        }}
        type="text"
        name="taskName"
        className="w-full"
        placeholder="Enter the task name"
      />

      <div className="w-fit flex flex-row-reverse px-10 gap-x-10">
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

        {/* 
        AddProject(task) */}
      </div>

      <div className="flex justify-center gap-x-10">
        <Button
          variant="default"
          className="cursor-pointer"
          asChild
          onClick={() => {
            if (isTimerOn) {
              onStop()
                .then((response) => {
                  console.log("responsessss", response);
                  if (response !== undefined) {
                    dispatch(stop());
                  }
                })
                .catch((error) => {
                  console.error("error");
                  console.error(error);
                });
            } else {
              dispatch(start({ selectedTags, taskName }));
            }
          }}
        >
          <span> {!isTimerOn ? "Start" : "Pause"}</span>
        </Button>
      </div>
    </>
  );
};
