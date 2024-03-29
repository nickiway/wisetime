"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

import { fetchSettingsById } from "@/redux/slices/settingsSlice";

import { Types } from "mongoose";

export const useSettings = (_id: Types.ObjectId | string) => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsSlice);

  useEffect(() => {
    if (settings.loading === "idle") {
      dispatch(fetchSettingsById(_id));
    }
  });

  return settings;
};
