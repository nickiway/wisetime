"use client";

import { useTimer } from "@/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";

import {
  addTick,
  addRestCounts,
  addWorkCounts,
  resetTicks,
  pause,
} from "@/redux/slices/pomodorroTimerSlice";
import "react-circular-progressbar/dist/styles.css";

export const PomodorroLogicModule = () => {
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

  const isRestCycle = !!(counter.work > counter.rest);
  const startTicks = isRestCycle
    ? counter.rest == 3
      ? restInterval.long
      : restInterval.short
    : workInterval;

  // vars if its time to do cycle
  const remainingTime = startTicks - ticks;
  const isTrigger = !remainingTime;

  // do cycle function
  const doCycle = useCallback(() => {
    isRestCycle ? dispatch(addRestCounts(1)) : dispatch(addWorkCounts(1));

    if (counter.work >= 4) {
      dispatch(pause());
    }

    dispatch(resetTicks());
  }, [dispatch, isRestCycle, counter.work]);

  // use timer options
  const options = useMemo(() => {
    return { isTrigger, cbOnTrigger: doCycle };
  }, [isTrigger, doCycle]);

  const handleTick = useCallback(() => {
    dispatch(addTick(1000));
  }, [dispatch]);

  // use effect to call the timer when it works
  useTimer({ isOn, cb: handleTick, options });

  return null;
};
