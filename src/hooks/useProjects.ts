"use client";

import { Types } from "mongoose";
import { useEffect } from "react";

import { fetchProjectsById } from "@/redux/slices/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useProjects = (userId: string | Types.ObjectId | undefined) => {
  const dispatch = useAppDispatch();

  console.log(userId);
  const { projects, loading, error } = useAppSelector(
    (state) => state.projectsSlice
  );

  useEffect(() => {
    if (loading === "idle" && userId) {
      dispatch(fetchProjectsById(userId));
    }
  }, [dispatch, loading, userId]);

  return error ? [] : projects;
};
