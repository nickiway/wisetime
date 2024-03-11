import { configureStore } from "@reduxjs/toolkit";
import analyticsReducer from "@/redux/slices/analyticsSlice";
import tagsReducer from "@/redux/slices/tagsSlice";

export const store = configureStore({
  reducer: {
    analyticsReducer,
    tagsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
