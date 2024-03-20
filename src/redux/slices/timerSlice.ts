import { createSlice } from "@reduxjs/toolkit";
import type { TagType } from "@/db/models/project/Tag";

interface TagsState {
  isTurn: boolean;
  ticks: number;
  totalTicks: number;
  circles: { ticks: number; totalTicks: number }[];
}

const initialState = {
  isTurn: false,
  ticks: 0,
  totalTicks: 0,
  circles: [],
} satisfies TagsState as TagsState;

const timerSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    start(state) {
      state.isTurn = true;
    },

    incrementTick(state, actions) {
      state.ticks += actions.payload;
      state.totalTicks += actions.payload;
    },

    pause(state) {
      state.isTurn = false;
    },

    stop(state) {
      state.isTurn = false;
      state.ticks = 0;
      state.totalTicks = 0;
      state.circles = [];
    },

    makeCircle(state) {
      state.circles.push({
        ticks: state.ticks,
        totalTicks: state.totalTicks,
      });

      state.ticks = 0;
    },
  },
});

export const { start, pause, incrementTick, stop, makeCircle } =
  timerSlice.actions;
export default timerSlice.reducer;
