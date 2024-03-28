"use client";

import { FaPause } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";

import { useTimer } from "@/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { stop } from "@/redux/slices/timerSlice";

import { Button } from "@/components/ui/button";
import { TimeTrackerDisplay } from "@/components/classic-time-tracker-components/time-tracker-display";

export const MinimizedTimeTracker = () => {
  const dispatch = useAppDispatch();
  const totalTicks = useAppSelector((state) => state.timerReducer.totalTicks);
  const isTimerOn = useTimer(false, () => {
  });

  return (
    totalTicks !== 0 && (
      <div className="flex justify-end items-center gap-5 p-5">
        <TimeTrackerDisplay ticksType="total" />

        <Button
          variant="default"
          className="cursor-pointer"
          asChild
          onClick={() => {
            dispatch(stop());
          }}
        >
          <span> {!isTimerOn ? <VscDebugStart /> : <FaPause />}</span>
        </Button>
      </div>
    )
  );
};
