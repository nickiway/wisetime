import { Types } from "mongoose";
import { useEffect } from "react";

import { fetchTagsByUserId, removeAll } from "@/redux/slices/tagsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useTags = (userId: string | Types.ObjectId) => {
  const dispatch = useAppDispatch();

  const { entities, loading } = useAppSelector((state) => state.tagsReducer);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchTagsByUserId(userId));
    }
  }, [dispatch, loading, userId]);

  return entities;
};
