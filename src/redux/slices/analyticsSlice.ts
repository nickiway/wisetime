import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAnalytics as actionsFetchAnalytics } from "@/actions/analytics";

import { IError, ILoading } from "@/types/general";
import type { IAnalytics } from "@/types/analytics";
import type { DateRange } from "react-day-picker";
import { IObjectId } from "@/types/general";

export const fetchAnalytics = createAsyncThunk(
  "fetchAnalytics",
  async (payload: { _id: IObjectId; dateRange: DateRange }) => {
    // const data = await actionsFetchAnalytics(payload._id, payload.dateRange);
    // fetch(
    //   `/api/analytics/${payload._id}/${payload.dateRange.from}/${payload.dateRange.to}`
    // );
    // console.log("settigns");
    // return data;
  }
);

const initialState = {
  loading: "idle",
  error: null,
  dateRange: {
    from: new Date(new Date().setHours(0, 0, 0, 0)),
    to: new Date(new Date().setHours(23, 59, 59, 59)),
  },
  timeSessions: 0,
  totalWorkHours: 0,
} as IAnalytics & ILoading & IError;

const analytics = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setDateRange(state, { payload }: PayloadAction<DateRange>) {
      state.dateRange = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnalytics.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { setDateRange } = analytics.actions;
export default analytics.reducer;
