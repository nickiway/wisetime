import { configureStore } from "@reduxjs/toolkit";
import analyticsReducer from "@/redux/slices/analyticsSlice";
import tagsReducer from "@/redux/slices/tagsSlice";
import timerReducer from "@/redux/slices/timerSlice";
import timerTableReducer from "./slices/timerTableSlice";
import pomodorroTimerSlice from "@/redux/slices/pomodorroTimerSlice";
import timeSessionRecordSlice from "@/redux/slices/timeSessionRecordSlice";
import createProjectFormSlice from "@/redux/slices/createProjectFormSlice";
import projectsSlice from "@/redux/slices/projectsSlice";
import settingsSlice from "./slices/settingsSlice";

import { enableMapSet, setAutoFreeze } from "immer";

enableMapSet();
setAutoFreeze(false);

export const store = configureStore({
  reducer: {
    analyticsReducer,
    tagsReducer,
    timerReducer,
    timerTableReducer,
    pomodorroTimerSlice,
    timeSessionRecordSlice,
    createProjectFormSlice,
    projectsSlice,
    settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
