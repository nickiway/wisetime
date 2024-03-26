"use client";
import { useAppSelector } from "@/redux/hooks";
import { CircularProgressbar } from "react-circular-progressbar";
import { ticksToMmSs } from "@/utils/date-time";

export const PomodorroDisplay = () => {
  const workInterval = useAppSelector(
    (state) => state.pomodorroTimerSlice.workInterval
  );

  const restInterval = useAppSelector(
    (state) => state.pomodorroTimerSlice.restInterval
  );

  const ticks = useAppSelector((state) => state.pomodorroTimerSlice.ticks);
  const counter = useAppSelector((state) => state.pomodorroTimerSlice.counter);

  const isRestCycle = !!(counter.work > counter.rest);
  const startTicks = isRestCycle
    ? counter.rest == 3
      ? restInterval.long
      : restInterval.short
    : workInterval;

  // vars if its time to do cycle
  const remainingTime = startTicks - ticks;

  // information label
  const informationLabel = isRestCycle
    ? "Take a break"
    : "Ok, lets concentrate";

  return (
    <div>
      <div className="flex flex-col gap-y-5 py-10">
        <p className="text-center text-2xl font-mono">{informationLabel}</p>

        <div className="flex justify-center ">
          <div className="w-1/5">
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "black",
                  transition: "stroke-dashoffset 0.5s ease 0s",
                },
                trail: {
                  stroke: "#d6d6d6",
                },
                text: {
                  fill: "black",
                  fontSize: "16px",
                },
                background: {
                  fill: "#3e98c7",
                },
              }}
              value={remainingTime}
              maxValue={startTicks}
              strokeWidth={5}
              text={ticksToMmSs(remainingTime)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
