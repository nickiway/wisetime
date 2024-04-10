"use client";

import { Types } from "mongoose";
import { useEffect } from "react";

import { fetchAnalytics } from "@/redux/slices/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useAnalytics = (userId: string | Types.ObjectId | undefined) => {
  const dispatch = useAppDispatch();

  const { dateRange, timeSessions, totalWorkHours, loading, error } =
    useAppSelector((state) => state.analyticsReducer);

  useEffect(() => {
    if (loading === "idle" && userId) {
      dispatch(
        fetchAnalytics({
          _id: userId,
          dateRange: dateRange,
        })
      );
    }
  }, [dispatch, loading, userId, dateRange]);

  return { timeSessions, totalWorkHours, dateRange, loading, error };
};
