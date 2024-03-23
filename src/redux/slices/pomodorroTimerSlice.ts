import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IPomodorroInitialState {
  //   settings
  workInterval: number;
  restInterval: { short: number; long: number };

  //   time tracking
  isOn: boolean;
  ticks: number;

  counter: {
    rest: number;
    work: number;
  };
}

const getTicksFromMin = (min: number): number => min * 1000 * 60;

const initialState: IPomodorroInitialState = {
  restInterval: { short: getTicksFromMin(0.1), long: getTicksFromMin(0.2) },
  workInterval: getTicksFromMin(0.1),

  isOn: false,
  ticks: 0,
  counter: {
    rest: 0,
    work: 0,
  },
};

const pomodorroTimerSlice = createSlice({
  name: "pomodorroTimerSlice",
  initialState,
  reducers: {
    // turn on the timer
    start(state) {
      state.isOn = true;
    },

    // pause
    pause(state) {
      state.isOn = false;
    },

    // adding tick
    addTick(state, { payload }) {
      state.ticks += payload;
    },

    // increasing a work counter
    addWorkCounts(state, { payload }) {
      state.counter.work += payload;
    },

    // increasing a rest counter
    addRestCounts(state, { payload }) {
      state.counter.rest += payload;
    },

    resetTicks(state) {
      state.ticks = 0;
    },
  },
});

export const {
  start,
  pause,
  addTick,
  addRestCounts,
  addWorkCounts,
  resetTicks,
} = pomodorroTimerSlice.actions;
export default pomodorroTimerSlice.reducer;
