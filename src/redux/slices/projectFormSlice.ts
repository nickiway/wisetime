import { createSlice } from "@reduxjs/toolkit";

interface IProjectFormInitialState {
  task: string;
  tags: Set<string>;
  project?: string;
}

const initialState = {
  task: "",
  tags: new Set(),
  project: "",
} satisfies IProjectFormInitialState as IProjectFormInitialState;

const projectFormSlice = createSlice({
  name: "projectFormSlice",
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

export const { setTags, setTask, toggleTimerTag } = projectFormSlice.actions;
export default projectFormSlice.reducer;
