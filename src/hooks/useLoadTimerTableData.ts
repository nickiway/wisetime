import { Types } from "mongoose";
import { useEffect } from "react";

import {
  TimerTableState,
  fetchTimerTableByUserId,
} from "@/redux/slices/timerTableSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useLoadTimerTableData = (userId: string | Types.ObjectId) => {
  const dispatch = useAppDispatch();

  const { table, loading } = useAppSelector(
    (state) => state.timerTableReducer
  ) as TimerTableState;

  useEffect(() => {
    if (loading === "idle") {
      console.log("fetching data of table");
      dispatch(fetchTimerTableByUserId(userId));
    }
  }, [dispatch, loading, userId]);

  return table;
};
