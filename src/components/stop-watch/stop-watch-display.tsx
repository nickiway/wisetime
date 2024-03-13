import { ticksToTime } from "@/utils/date-time";

interface StopWatchDisplayProps {
  ticks: number;
}

export const StopWatchDisplay = ({ ticks }: StopWatchDisplayProps) => {
  const formatedTime = ticksToTime(ticks);

  return (
    <section className="flex justify-center">
      <span className="text-l tracking-widest">{formatedTime}</span>
    </section>
  );
};
