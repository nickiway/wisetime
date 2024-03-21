import { Types } from "mongoose";
import { useEffect } from "react";

import { fetchTableByUserId } from "@/redux/slices/timerTableSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useLoadTimerTableData = (userId: string | Types.ObjectId) => {
  const dispatch = useAppDispatch();

  const { table, loading } = useAppSelector((state) => state.timerTableReducer);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchTableByUserId(userId));
    }
  }, [dispatch, loading, userId]);

  return table;
};
