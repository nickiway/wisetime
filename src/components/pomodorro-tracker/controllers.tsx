"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { start, pause } from "@/redux/slices/pomodorroTimerSlice";

export const PomodorroControllers = () => {
  const dispatch = useAppDispatch();
  const isOn = useAppSelector((state) => state.pomodorroTimerSlice.isOn);

  console.log("render controller");
  const handleClick = () => {
    isOn ? dispatch(pause()) : dispatch(start());
  };

  const dynamicButtonLabel = () => (isOn ? "Pause" : "Start");

  return (
    <div className="flex justify-center">
      <Button variant="default" onClick={handleClick}>
        {dynamicButtonLabel()}
      </Button>
    </div>
  );
};
