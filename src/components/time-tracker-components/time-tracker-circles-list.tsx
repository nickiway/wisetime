"use client";

import { useAppSelector } from "@/redux/hooks";
import { ticksToTime } from "@/utils/date-time";

export const TimeTrackerCirclesList = () => {
  const circlesList = useAppSelector((state) => state.timerReducer.circles);
  console.log(circlesList);

  return circlesList.map((circle, index) => {
    return (
      <section key={index}>
        <div>Circle Time {ticksToTime(circle.ticks)}</div>
        <div>Total time {ticksToTime(circle.totalTicks)}</div>
      </section>
    );
  });
};
