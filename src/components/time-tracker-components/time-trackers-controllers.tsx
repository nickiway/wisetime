"use client";

import { Session } from "next-auth";

import { storeTimerSession } from "@/actions/timer";
import { useTimer } from "@/hooks/useTimer";

import { pause, start, stop, makeCircle } from "@/redux/slices/timerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

interface TimeTrackerControllersProps {
  session: Session | null;
}

export const TimeTrackerControllers = ({
  session,
}: TimeTrackerControllersProps) => {
  const dispatch = useAppDispatch();
  const isTimerOn = useTimer();

  const totalTicks = useAppSelector((state) => state.timerReducer.totalTicks);
  const ticks = useAppSelector((state) => state.timerReducer.ticks);
  const circles = useAppSelector((state) => state.timerReducer.circles);

  const onStop = async () => {
    if (!session) {
      return;
    }

    const lastCircle = { ticks, totalTicks };

    const { error, result } = await storeTimerSession({
      totalTicks,
      circles: [...circles, lastCircle],
      userId: session?.user?.id,
    });

    console.log(result);
  };

  return (
    <>
      <Input type="text" placeholder="Enter the task name" />

      <div className="flex justify-center gap-x-10 p-10">
        <Button
          variant="default"
          className="cursor-pointer"
          asChild
          onClick={() => {
            isTimerOn ? dispatch(pause()) : dispatch(start());
          }}
        >
          <span> {!isTimerOn ? "Start" : "Pause"}</span>
        </Button>

        {/* {(isTimerOn || totalTicks !== 0) && (
          <>
            <Button
              variant="default"
              className="cursor-pointer"
              asChild
              onClick={() => {
                onStop().then(() => dispatch(stop()));
              }}
            >
              <span>Stop</span>
            </Button>

            <Button
              variant="default"
              className="cursor-pointer"
              asChild
              onClick={() => {
                dispatch(makeCircle());
              }}
            >
              <span>Make a circle</span>
            </Button>
          </>
        )} */}
      </div>
    </>
  );
};
