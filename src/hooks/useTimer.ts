import { useEffect } from "react";

import { clearInterval, setInterval } from "worker-timers";

interface useTimerProps {
  isOn: boolean;
  cb: () => void;
  options: {
    endTrigger?: boolean;
    cbOnEnd?: () => void;
    cbOnMount?: () => void;
  };
}

export const useTimer = ({ isOn, cb, options }: useTimerProps) => {
  const { endTrigger, cbOnEnd, cbOnMount } = options;

  // on mount function
  useEffect(() => {
    cbOnMount?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // engine
  useEffect(() => {
    let timerInterval: number | undefined;

    if (isOn) {
      timerInterval = setInterval(() => {
        cb();
        if (endTrigger === true) {
          cbOnEnd?.();
        }
      }, 1000);
    } else if (timerInterval !== undefined) {
      clearInterval(timerInterval);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn, options]);
};
