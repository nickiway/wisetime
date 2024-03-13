import { FaClock } from "react-icons/fa";
import { HTMLAttributes } from "react";

import { convertToHhMm } from "@/utils/date-time";

interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  startDate: number;
  endDate: number;
  subtitle?: string;
}

export const Notification = ({
  className,
  title,
  subtitle,
  startDate,
  endDate,
}: NotificationProps) => {
  const period = [convertToHhMm(startDate), convertToHhMm(endDate)].join("-");

  return (
    <div className={className}>
      <p>{title}</p>
      <p className="text-muted-foreground text-xs">{subtitle}</p>
      <div className="flex items-center gap-2">
        <FaClock className="text-zinc-900" />
        <span>{period}</span>
      </div>
    </div>
  );
};
