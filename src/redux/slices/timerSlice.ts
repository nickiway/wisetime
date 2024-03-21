import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  isTurn: boolean;
  ticks: number;
  totalTicks: number;
  circles: { ticks: number; totalTicks: number }[];
  tags: Set<string>;
  taskName: string;
}

const initialState = {
  isTurn: false,
  ticks: 0,
  totalTicks: 0,
  tags: new Set(),
  taskName: "",
  circles: [],
} satisfies TimerState as TimerState;

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start(state, action) {
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

    setTaskName(state, { payload }) {
      state.taskName = payload;
    },

    insertTimerTag(state, { payload: id }) {
      state.tags.add(id);
    },

    deleteTimerTag(state, { payload: id }) {
      state.tags.delete(id);
    },

    toggleTimerTag(state, { payload: id }) {
      state.tags.has(id) ? state.tags.delete(id) : state.tags.add(id);
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
  toggleTimerTag,
} = timerSlice.actions;
export default timerSlice.reducer;
