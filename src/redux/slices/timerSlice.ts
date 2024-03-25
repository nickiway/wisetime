import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  startDate: Date | null;
  isTurn: boolean;
  ticks: number;
  totalTicks: number;
  tags: Set<string>;
  taskName: string;
}

const initialState = {
  isTurn: false,
  ticks: 0,
  totalTicks: 0,
  tags: new Set(),
  startDate: null,
  taskName: "",
} satisfies TimerState as TimerState;

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start(state, action) {
      state.isTurn = true;
      state.startDate = new Date();
    },

    onMountTimer(state) {
      if (state.startDate !== null) {
        state.ticks = new Date().getTime() - state.startDate.getTime();
      }
    },

    incrementTick(state, actions) {
      state.ticks += actions.payload;
      state.totalTicks += actions.payload;
    },

    pause(state) {
      state.isTurn = false;
      state.startDate = null;
    },

    stop(state) {
      state.isTurn = false;
      state.ticks = 0;
      state.totalTicks = 0;
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
  setTaskName,
  insertTimerTag,
  deleteTimerTag,
  toggleTimerTag,
  onMountTimer,
} = timerSlice.actions;
export default timerSlice.reducer;
