import { configureStore } from "@reduxjs/toolkit";
import analyticsReducer from "@/redux/slices/analyticsSlice";
import tagsReducer from "@/redux/slices/tagsSlice";
import timerReducer from "@/redux/slices/timerSlice";
import timerTableReducer from "./slices/timerTableSlice";

import { enableMapSet } from "immer";

enableMapSet();

export const store = configureStore({
  reducer: {
    analyticsReducer,
    tagsReducer,
    timerReducer,
    timerTableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
