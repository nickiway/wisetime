import { createSlice } from "@reduxjs/toolkit";

interface InitialTimerState {
  startDate: Date | null;
  ticks: number;
  tags: Set<string>;
  taskName: string;
}

const initialState = {
  ticks: 0,
  tags: new Set(),
  startDate: null,
  taskName: "",
} satisfies InitialTimerState as InitialTimerState;

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start(state) {
      state.startDate = new Date();
    },

    onMountTimer(state) {
      if (state.startDate !== null) {
        state.ticks = new Date().getTime() - state.startDate.getTime();
      }
    },

    incrementTick(state, actions) {
      state.ticks += actions.payload;
    },

    stop(state) {
      state.ticks = 0;
      state.startDate = null;
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
  incrementTick,
  stop,
  setTaskName,
  insertTimerTag,
  deleteTimerTag,
  toggleTimerTag,
  onMountTimer,
} = timerSlice.actions;
export default timerSlice.reducer;
