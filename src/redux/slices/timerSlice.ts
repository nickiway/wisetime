import { createSlice } from "@reduxjs/toolkit";

interface InitialTimerState {
  startDate: Date | null;
  totalTicks: number;
  selectedTags: Set<string>;
  taskName: string;
}

const initialState = {
  totalTicks: 0,
  selectedTags: new Set(),
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
        state.totalTicks = new Date().getTime() - state.startDate.getTime();
      }
    },

    incrementTick(state, actions) {
      state.totalTicks += actions.payload;
    },

    stop(state) {
      state.totalTicks = 0;
      state.startDate = null;
    },

    setTaskName(state, { payload }) {
      state.taskName = payload;
    },

    insertTimerTag(state, { payload: id }) {
      state.selectedTags.add(id);
    },

    deleteTimerTag(state, { payload: id }) {
      state.selectedTags.delete(id);
    },

    toggleTimerTag(state, { payload: id }) {
      state.selectedTags.has(id)
        ? state.selectedTags.delete(id)
        : state.selectedTags.add(id);
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
