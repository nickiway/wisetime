"use client";

import { HTMLAttributes, useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { setDate } from "@/redux/slices/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface AnalyticsCalendarProps extends HTMLAttributes<HTMLDivElement> {}
export const AnalyticsCalendar = ({ className }: AnalyticsCalendarProps) => {
  const calendarDay = useAppSelector(
    (state) => state.analyticsReducer.value.calendarDay
  );

  const dispatch = useAppDispatch();

  const setDateOnSelect = (date: Date) => {
    dispatch(setDate(new Date(date)));
  };

  return (
    <Calendar
      mode="single"
      selected={calendarDay}
      onSelect={(date) => {
        setDateOnSelect(date as Date);
      }}
      className={className}
    />
  );
};
