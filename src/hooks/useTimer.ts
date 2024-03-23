import { useEffect } from "react";

import { clearInterval, setInterval } from "worker-timers";

export const useTimer = (
  isTimerOn: Boolean,
  cb: () => void,
  options?: { endTrigger: boolean; cbOnEnd: () => void }
) => {
  useEffect(() => {
    console.log("running effect");
    let timerInterval: number | undefined;

    if (isTimerOn) {
      timerInterval = setInterval(() => {
        cb();

        if (options?.endTrigger === true) {
          options?.cbOnEnd();
        }
      }, 1000);
    } else if (timerInterval !== undefined) {
      clearInterval(timerInterval);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerOn, options]);
};
