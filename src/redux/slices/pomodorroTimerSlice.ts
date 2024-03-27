import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IPomodorroInitialState {
  //   settings
  workInterval: number;
  restInterval: { short: number; long: number };

  //   time tracking
  isOn: boolean;
  ticks: number;
  totalTicks: number;

  startDate?: Date | null;
  pauseDate?: Date | null;

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
  totalTicks: 0,
  ticks: 0,

  startDate: null,

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
      state.startDate = new Date();
    },

    // pause
    pause(state) {
      state.isOn = false;
      state.pauseDate = new Date();
    },

    // resume
    resume(state) {
      state.startDate = new Date(
        new Date().getTime() -
          (new Date().getTime() - state.pauseDate?.getTime()!)
      );
      state.isOn = true;
    },

    // on mount call
    onMountTimer(state) {
      if (
        state.startDate !== null &&
        state.startDate !== undefined &&
        state.isOn
      ) {
        state.ticks =
          Math.floor(
            (new Date().getTime() - state.startDate?.getTime()) / 1000
          ) * 1000;

        state.totalTicks =
          Math.floor(
            (new Date().getTime() - state.startDate?.getTime()) / 1000
          ) * 1000;
      }
    },

    //finish
    finish(state) {
      state.isOn = false;
      state.totalTicks = 0;
      state.startDate = null;
      state.ticks = 0;
    },

    // adding tick
    addTick(state, { payload }) {
      state.ticks += payload;
      state.totalTicks += payload;
    },

    // increasing a work counter
    addWorkCounts(state, { payload }) {
      state.counter.work += payload;
    },

    // increasing a rest counter
    addRestCounts(state, { payload }) {
      state.counter.rest += payload;
    },

    decreaseTicksByMount(state, actions) {
      state.ticks -= actions.payload;
    },
  },
});

export const {
  start,
  pause,
  addTick,
  resume,
  finish,
  onMountTimer,
  addRestCounts,
  addWorkCounts,
  decreaseTicksByMount,
} = pomodorroTimerSlice.actions;
export default pomodorroTimerSlice.reducer;
