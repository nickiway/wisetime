"use client";

import { useTimer } from "@/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addTick,
  addRestCounts,
  addWorkCounts,
  resetTicks,
} from "@/redux/slices/pomodorroTimerSlice";
import { ticksToTime } from "@/utils/date-time";
import { useCallback, useMemo } from "react";

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

  const remainingTime = startTicks - ticks;
  const isRemainingTime = !(startTicks - ticks);

  // do cycle function
  const doCycle = useCallback(() => {
    counter.work > counter.rest
      ? dispatch(addRestCounts(1))
      : dispatch(addWorkCounts(1));

    dispatch(resetTicks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // use timer options
  const options = useMemo(() => {
    return { endTrigger: isRemainingTime, cbOnEnd: doCycle };
  }, [isRemainingTime, doCycle]);

  const handleTick = useCallback(() => {
    dispatch(addTick(1000));
  }, [dispatch]);

  // use effect to call the timer when it works
  useTimer(isOn, handleTick, options);

  return <div>{ticksToTime(remainingTime)}</div>;
};
