import { createSlice } from "@reduxjs/toolkit";
import type { TagType } from "@/db/models/project/Tag";

interface TagsState {
  isTurn: boolean;
}

const initialState = {
  isTurn: false,
} satisfies TagsState as TagsState;

const timerSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    turnOn(state) {
      state.isTurn = true;
    },

    turnOff(state) {
      state.isTurn = false;
    },
  },
});

export const { turnOn, turnOff } = timerSlice.actions;
export default timerSlice.reducer;
