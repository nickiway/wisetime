import { useEffect } from "react";

import { clearInterval, setInterval } from "worker-timers";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { incrementTick } from "@/redux/slices/timerSlice";

export const useTimer = (): Boolean => {
  const dispatch = useAppDispatch();
  const isTimerOn = useAppSelector((state) => state.timerReducer.isTurn);

  useEffect(() => {
    let timerInterval: number | undefined;

    if (isTimerOn) {
      timerInterval = setInterval(() => {
        dispatch(incrementTick(1000));
      }, 1000);
    } else if (timerInterval !== undefined) {
      clearInterval(timerInterval);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isTimerOn, dispatch]);

  return isTimerOn;
};
