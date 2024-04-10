import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import analyticsReducer, { setDateRange } from "@/redux/slices/analyticsSlice";
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

const listenerMiddlewareAnalytics = createListenerMiddleware();
listenerMiddlewareAnalytics.startListening({
  actionCreator: setDateRange,
  effect: async (action, listenApi) => {
    console.log(action.payload);
  },
});

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
    }).prepend(listenerMiddlewareAnalytics.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
