import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISessionBody } from "@/db/models/timer/TimerSessions";
import { Types } from "mongoose";

export const fetchTableByUserId = createAsyncThunk(
  "timer/fetchTable",
  async (userId: string | Types.ObjectId) => {
    const response = (await fetch(`/api/timerTable/${userId}`, {})).json();
    return response;
  }
);

interface TimerTableState {
  table: ISessionBody[];
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
  reducers: {
    addRow: (state, action: PayloadAction<ISessionBody>) => {
      state.table.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableByUserId.pending, (state, _) => {
        state.loading = "pending";
      })
      .addCase(fetchTableByUserId.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.table = state.table.concat(action.payload.table);
      })
      .addCase(fetchTableByUserId.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

// exporting actions and reducers
export const { addRow } = timerTableSlice.actions;
export default timerTableSlice.reducer;
