import { createSlice } from "@reduxjs/toolkit";

interface ITimeSessionRecordSliceInitialState {
  task: string;
  tags: Set<string>;
  project?: string;
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
  },
});

export const { setTags, setTask, toggleTimerTag } =
  timeSessionRecordSlice.actions;
export default timeSessionRecordSlice.reducer;
