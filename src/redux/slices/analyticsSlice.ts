import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AnalyticsState = {
  calendarDay: Date;
};

type InitialState = {
  value: AnalyticsState;
};

const initialState = {
  value: {
    calendarDay: new Date(),
  } as AnalyticsState,
} as InitialState;

export const analytics = createSlice({
  name: "analytics",
  initialState: initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      return {
        value: {
          calendarDay: action.payload,
        },
      };
    },
  },
});

export const { setDate } = analytics.actions;
export default analytics.reducer;
