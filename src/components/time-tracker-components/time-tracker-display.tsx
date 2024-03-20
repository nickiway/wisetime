"use client";

import { HTMLAttributes } from "react";

import { ticksToTime } from "@/utils/date-time";
import { useAppSelector } from "@/redux/hooks";

import { cn } from "@/lib/utils";

interface TimeTrackerDisplayProps extends HTMLAttributes<HTMLDivElement> {
  ticksType?: "circle" | "total";
}

export const TimeTrackerDisplay = ({
  className,
  ticksType = "circle",
}: TimeTrackerDisplayProps) => {
  const ticksToShow = ticksType === "circle" ? "ticks" : "totalTicks";
  const ticks = useAppSelector((state) => state.timerReducer[ticksToShow]);
  const formatedTime = ticksToTime(ticks);

  return (
    <section className="flex justify-center">
      <p className={cn("text-l tracking-widest", className)}>{formatedTime}</p>
    </section>
  );
};
