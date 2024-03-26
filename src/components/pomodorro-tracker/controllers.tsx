"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useToast } from "@/components/ui/use-toast";
import { storeTimerSession } from "@/actions/timer-action";

import { Button } from "@/components/ui/button";
import { start, pause, finish } from "@/redux/slices/pomodorroTimerSlice";
import { Session } from "next-auth";

export const PomodorroControllers = ({
  session,
}: {
  session: Session | null;
}) => {
  const dispatch = useAppDispatch();
  const isOn = useAppSelector((state) => state.pomodorroTimerSlice.isOn);
  const selectedTags = useAppSelector(
    (state) => state.timeSessionRecordSlice.tags
  );

  const totalTicks = useAppSelector(
    (state) => state.pomodorroTimerSlice.totalTicks
  );
  const taskName = useAppSelector((state) => state.timeSessionRecordSlice.task);

  const { toast } = useToast();

  const isClassicTimerOn = useAppSelector(
    (state) => state.timerReducer.startDate
  );

  const handleClick = () => {
    if (!isClassicTimerOn) {
      isOn ? dispatch(pause()) : dispatch(start());
    } else {
      toast({
        title: "Please run only one timer at the same time",
        description:
          "To run pomodorro timer, be sure that classic time tracker is turn off",
      });
    }
  };

  const onFinish = async () => {
    if (totalTicks === 0) {
      toast({
        title: "Something went wrong",
        description: "Before finishing the timer, run it",
      });
      return;
    }

    if (!session?.user?.id) {
      toast({
        title: "Something went wrong",
        description: "Relogin to your account",
      });
      return;
    }

    const response = await storeTimerSession({
      totalTicks,
      userId: session?.user?.id,
      taskName,
      selectedTags,
      project: "",
      date: new Date(),
    });

    return response;
  };

  const dynamicButtonLabel = () => (isOn ? "Pause" : "Start");

  return (
    <div className="flex justify-center gap-x-10">
      <Button
        variant="default"
        disabled={!!isClassicTimerOn}
        onClick={handleClick}
      >
        {dynamicButtonLabel()}
      </Button>

      <Button
        variant="default"
        disabled={!!isClassicTimerOn}
        onClick={() => {
          onFinish()
            .then(() => {
              dispatch(finish());
            })
            .catch((error) => {
              toast({
                title: "Something went wrong",
                description: error.message,
                duration: 3000,
              });
            });
        }}
      >
        Finish
      </Button>
    </div>
  );
};
