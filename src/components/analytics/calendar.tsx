"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import type { DateRange } from "react-day-picker";

import { setDateRange } from "@/redux/slices/analyticsSlice";

import { Calendar } from "@/components/ui/calendar";

export const AnalyticsCalendar = () => {
  const dispatch = useAppDispatch();

  const onCalendarSelect = (range: DateRange | undefined) => {
    if (!range) return;

    dispatch(setDateRange(range));
  };

  const { dateRange } = useAppSelector((state) => state.analyticsReducer);

  return (
    <div>
      <Calendar mode="range" selected={dateRange} onSelect={onCalendarSelect} />
    </div>
  );
};
