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
  restInterval: { short: getTicksFromMin(5), long: getTicksFromMin(15) },
  workInterval: getTicksFromMin(25),

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
    // config settings
    configSettings(state, { payload }) {
      state.restInterval = {
        short: getTicksFromMin(payload.restShort),
        long: getTicksFromMin(payload.restLong),
      };
      state.workInterval = getTicksFromMin(payload.workShort);
    },
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
      const { pauseDate } = state;

      if (pauseDate) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - pauseDate.getTime();

        state.startDate = new Date(currentTime - elapsedTime);
        state.isOn = true;
      }
    },

    // on timer mount
    onMountTimer(state) {
      const { startDate, isOn } = state;

      if (startDate && isOn) {
        const currentTime = new Date().getTime();
        const elapsedSeconds =
          Math.floor((currentTime - startDate.getTime()) / 1000) * 1000;

        state.ticks = elapsedSeconds;
        state.totalTicks = elapsedSeconds;
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
  configSettings,
} = pomodorroTimerSlice.actions;
export default pomodorroTimerSlice.reducer;
