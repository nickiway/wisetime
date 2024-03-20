"use client";

import { Session } from "next-auth";
import { FaTags } from "react-icons/fa";

import { storeTimerSession } from "@/actions/timer";
import { useTimer } from "@/hooks/useTimer";

import {
  setTaskName,
  start,
  stop,
  makeCircle,
  insertTimerTag,
  deleteTimerTag,
} from "@/redux/slices/timerSlice";
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

interface TimeTrackerControllersProps {
  session: Session | null;
}

export const TimeTrackerControllers = ({
  session,
}: TimeTrackerControllersProps) => {
  const dispatch = useAppDispatch();
  const isTimerOn = useTimer();
  const tags = useTags(session?.user?.id || "");

  const totalTicks = useAppSelector((state) => state.timerReducer.totalTicks);
  const taskName = useAppSelector((state) => state.timerReducer.taskName);
  const selectedTags = useAppSelector(
    (state) => state.timerReducer.selectedTags
  );

  const onStop = async () => {
    if (!session) {
      return;
    }

    const { error, result } = await storeTimerSession({
      totalTicks,
      userId: session?.user?.id,
      taskName,
      selectedTags,
    });

    console.log(result);
  };

  return (
    <>
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(setTaskName(e.target.value));
        }}
        type="text"
        name="taskName"
        className="w-[50%]"
        placeholder="Enter the task name"
      />

      <div className="w-[40%] flex flex-row-reverse px-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaTags color="gray" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {tags.map((tag) => {
              return (
                <DropdownMenuLabel key={tag._id.toString()} className="py-2">
                  <Button
                    variant={
                      selectedTags.has(tag._id.toString())
                        ? "outline"
                        : "default"
                    }
                    className="cursor-pointer w-full"
                    asChild
                    onClick={() => {
                      selectedTags.has(tag._id.toString())
                        ? dispatch(deleteTimerTag(tag._id.toString()))
                        : dispatch(insertTimerTag(tag._id.toString()));
                    }}
                  >
                    <span>{tag.title}</span>
                  </Button>
                </DropdownMenuLabel>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* setTag
        MoneyMaking
        AddProject(task) */}
      </div>

      <div className="flex justify-center gap-x-10">
        <Button
          variant="default"
          className="cursor-pointer"
          asChild
          onClick={() => {
            if (isTimerOn) {
              onStop().then(() => dispatch(stop()));
            } else {
              dispatch(start({ selectedTags, taskName }));
            }
          }}
        >
          <span> {!isTimerOn ? "Start" : "Pause"}</span>
        </Button>

        {/* {(isTimerOn || totalTicks !== 0) && (
          <>
            <Button
              variant="default"
              className="cursor-pointer"
              asChild
              onClick={() => {
                onStop().then(() => dispatch(stop()));
              }}
            >
              <span>Stop</span>
            </Button>

            <Button
              variant="default"
              className="cursor-pointer"
              asChild
              onClick={() => {
                dispatch(makeCircle());
              }}
            >
              <span>Make a circle</span>
            </Button>
          </>
        )} */}
      </div>
    </>
  );
};
