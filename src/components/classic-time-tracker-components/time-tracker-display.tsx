"use client";

import { HTMLAttributes } from "react";

import { ticksToTime } from "@/utils/date-time";
import { useAppSelector } from "@/redux/hooks";

import { cn } from "@/lib/utils";

interface TimeTrackerDisplayProps extends HTMLAttributes<HTMLDivElement> {}

export const TimeTrackerDisplay = ({ className }: TimeTrackerDisplayProps) => {
  const { totalTicks } = useAppSelector((state) => state.timerReducer);
  const formatedTime = ticksToTime(totalTicks);

  return (
    <section className="flex justify-center">
      <p className={cn("text-l tracking-widest", className)}>{formatedTime}</p>
    </section>
  );
};
