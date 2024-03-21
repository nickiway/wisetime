import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISessionBody } from "@/db/models/timer/TimerSessions";
import { Types } from "mongoose";

export const fetchTimerTableByUserId = createAsyncThunk(
  "timer/fetchTable",
  async (userId: string | Types.ObjectId) => {
    const response = (await fetch(`/api/timerTable/${userId}`, {})).json();

    console.log("response", response);
    return response;
  }
);

interface TimerTableState {
  table: { body: ISessionBody }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState = {
  table: [],
  loading: "idle",
  error: "",
} satisfies TimerTableState as TimerTableState;

export const timerTableSlice = createSlice({
  name: "timer table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimerTableByUserId.pending, (state, _) => {
        state.loading = "pending";
      })
      .addCase(fetchTimerTableByUserId.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.table = action.payload.table;
      })
      .addCase(fetchTimerTableByUserId.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

// exporting actions and reducers
export const {} = timerTableSlice.actions;
export default timerTableSlice.reducer;
