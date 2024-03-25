import { useEffect } from "react";

import { clearInterval, setInterval } from "worker-timers";

interface useTimerProps {
  isTimerOn: Boolean;
  cb: () => void;
  options: {
    endTrigger?: boolean;
    cbOnEnd?: () => void;
    cbOnMount?: () => void;
  };
}

export const useTimer = ({ isTimerOn, cb, options }: useTimerProps) => {
  const { endTrigger, cbOnEnd, cbOnMount } = options;

  useEffect(() => {
    let timerInterval: number | undefined;

    if (cbOnMount !== undefined) {
      cbOnMount();
    }

    if (isTimerOn) {
      timerInterval = setInterval(() => {
        cb();
        if (endTrigger === true && cbOnEnd !== undefined) {
          cbOnEnd();
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
