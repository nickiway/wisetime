"use client";

import { FaPause } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";

import { useTimer } from "@/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { pause, start } from "@/redux/slices/timerSlice";

import { Button } from "@/components/ui/button";
import { TimeTrackerDisplay } from "@/components/time-tracker-components/time-tracker-display";

export const MinimizedTimeTracker = () => {
  const dispatch = useAppDispatch();
  const totalTicks = useAppSelector((state) => state.timerReducer.totalTicks);
  const isTimerOn = useTimer();

  return (
    totalTicks !== 0 && (
      <div className="flex justify-end items-center gap-5 p-5">
        <TimeTrackerDisplay ticksType="total" />

        <Button
          variant="default"
          className="cursor-pointer"
          asChild
          onClick={() => {
            isTimerOn ? dispatch(pause()) : dispatch(start());
          }}
        >
          <span> {!isTimerOn ? <VscDebugStart /> : <FaPause />}</span>
        </Button>
      </div>
    )
  );
};
