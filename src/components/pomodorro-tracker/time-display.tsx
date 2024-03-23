"use client";

import { useTimer } from "@/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addTick,
  addRestCounts,
  addWorkCounts,
  resetTicks,
  pause,
} from "@/redux/slices/pomodorroTimerSlice";
import { ticksToTime } from "@/utils/date-time";
import { useCallback } from "react";

export const PomodorroTimeDisplay = () => {
  const dispatch = useAppDispatch();

  const workInterval = useAppSelector(
    (state) => state.pomodorroTimerSlice.workInterval
  );

  const restInterval = useAppSelector(
    (state) => state.pomodorroTimerSlice.restInterval
  );

  const ticks = useAppSelector((state) => state.pomodorroTimerSlice.ticks);
  const isOn = useAppSelector((state) => state.pomodorroTimerSlice.isOn);
  const counter = useAppSelector((state) => state.pomodorroTimerSlice.counter);

  const startTicks =
    counter.work > counter.rest ? restInterval.short : workInterval;

  console.log(ticks);
  const remainingTime = startTicks - ticks;
  const isRemainingTime = !(startTicks - ticks);

  const doCycle = () => {
    counter.work > counter.rest
      ? dispatch(addRestCounts(1))
      : dispatch(addWorkCounts(1));

    dispatch(resetTicks());
  };

  const handleTick = () => {
    console.log("increaseing");
    dispatch(addTick(1000));
  };

  // use effect to call the timer when it works
  useTimer(isOn, handleTick, { endTrigger: isRemainingTime, cbOnEnd: doCycle });

  return <div>{ticksToTime(remainingTime)}</div>;
};
