import { createSlice } from "@reduxjs/toolkit";
import { Types } from "mongoose";

interface ITimeSessionRecordSliceInitialState {
  task: string;
  tags: Set<string>;
  project: Types.ObjectId | string;
}

const initialState = {
  task: "",
  tags: new Set(),
  project: "",
} satisfies ITimeSessionRecordSliceInitialState as ITimeSessionRecordSliceInitialState;

const timeSessionRecordSlice = createSlice({
  name: "timeSessionRecordSlice",
  initialState,
  reducers: {
    setTask(state, actions) {
      state.task = actions.payload;
    },

    setTags(state, actions) {
      state.tags.add(actions.payload);
    },

    toggleTimerTag(state, { payload: id }) {
      state.tags.has(id) ? state.tags.delete(id) : state.tags.add(id);
    },

    setProject(state, { payload: _id }) {
      state.project = _id;
    },
  },
});

export const { setTags, setTask, toggleTimerTag, setProject } =
  timeSessionRecordSlice.actions;
export default timeSessionRecordSlice.reducer;
