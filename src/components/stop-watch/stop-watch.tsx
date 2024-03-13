"use client";

import { FaPause } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { turnOff, turnOn } from "@/redux/slices/timerSlice";

import { Button } from "@/components/ui/button";
import { StopWatchDisplay } from "@/components/stop-watch/stop-watch-display";

interface StopWatchProps {
  showPage?: boolean;
}

export const StopWatch = ({ showPage }: StopWatchProps) => {
  const [ticks, setTicks] = useState<number>(0);
  const dispatch = useAppDispatch();

  const isTimerOn = useAppSelector((state) => state.timerReducer.isTurn);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | undefined;

    if (isTimerOn) {
      console.log(isTimerOn);
      timerInterval = setInterval(() => {
        setTicks((prevTicks) => prevTicks + 10);
      }, 10);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isTimerOn]);

  return (
    <>
      {(isTimerOn || showPage) && <StopWatchDisplay ticks={ticks} />}

      {(isTimerOn || showPage) && (
        <Button
          variant="default"
          className="cursor-pointer"
          asChild
          onClick={() => {
            isTimerOn ? dispatch(turnOff()) : dispatch(turnOn());
          }}
        >
          <span> {!isTimerOn ? <VscDebugStart /> : <FaPause />}</span>
        </Button>
      )}
    </>
  );
};
