"use client";
import { HTMLAttributes, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

interface AnalyticsCalendarProps extends HTMLAttributes<HTMLDivElement> {}
export const AnalyticsCalendar = ({ className }: AnalyticsCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={className}
    />
  );
};
