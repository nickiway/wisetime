import { Types } from "mongoose";
import { IProject } from "@/types/project";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjectsById = createAsyncThunk(
  "projects/fetch",
  async (_id: Types.ObjectId | string) => {
    const data = (await fetch("/api/projects/" + _id)).json();
    console.log("data");
    console.log(data);
    return data;
  }
);

interface IProjectsInitialState {
  projects: IProject[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  projects: [],
  loading: "idle",
} satisfies IProjectsInitialState as IProjectsInitialState;

const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsById.pending, (state, _) => {
        state.loading = "pending";
      })
      .addCase(fetchProjectsById.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.projects = state.projects.concat(action.payload.projects);
      })
      .addCase(fetchProjectsById.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
