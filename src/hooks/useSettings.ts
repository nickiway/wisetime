"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { fetchSettingsById } from "@/redux/slices/settingsSlice";

export const useSettings = () => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession({
    required: true,
  });

  const settings = useAppSelector((state) => state.settingsSlice);

  useEffect(() => {
    if (settings.loading === "idle" && session?.user.id) {
      dispatch(fetchSettingsById(session?.user.id));
    }
  });

  return settings;
};
