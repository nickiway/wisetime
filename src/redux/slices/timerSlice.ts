import { createSlice } from "@reduxjs/toolkit";
import type { TagType } from "@/db/models/project/Tag";

interface TagsState {
  isTurn: boolean;
  ticks: number;
  totalTicks: number;
  circles: { ticks: number; totalTicks: number }[];
  selectedTags: Set<string>;
  taskName: string;
}

const initialState = {
  isTurn: false,
  ticks: 0,
  totalTicks: 0,
  selectedTags: new Set(),
  taskName: "",
  circles: [],
} satisfies TagsState as TagsState;

const timerSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    start(state, action) {
      state.isTurn = true;
      state.selectedTags = action.payload.selectedTags;
      state.taskName = action.payload.taskName;
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

    setTaskName(state, { payload }) {
      state.taskName = payload;
    },

    insertTimerTag(state, { payload: tagId }) {
      state.selectedTags.add(tagId);
    },

    deleteTimerTag(state, { payload: tagId }) {
      state.selectedTags.delete(tagId);
    },
  },
});

export const {
  start,
  pause,
  incrementTick,
  stop,
  makeCircle,
  setTaskName,
  insertTimerTag,
  deleteTimerTag,
} = timerSlice.actions;
export default timerSlice.reducer;
