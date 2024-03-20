import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TagType } from "@/db/models/project/Tag";
import { Types } from "mongoose";

export const fetchTagsByUserId = createAsyncThunk(
  "tags/fetchTags",
  async (userId: string | Types.ObjectId) => {
    const response = (await fetch(`/api/tags/${userId}`, {})).json();

    console.log(response);
    return response;
  }
);

interface TagsState {
  entities: TagType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState = {
  entities: [],
  loading: "idle",
  error: "",
} satisfies TagsState as TagsState;

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTagToStore(state, action) {
      state.entities.push(action.payload);
    },

    removeTag(state, action) {
      state.entities = state.entities.filter(
        (tag) => tag._id !== action.payload
      );
    },

    removeAll(state) {
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsByUserId.pending, (state, _) => {
        state.loading = "pending";
      })
      .addCase(fetchTagsByUserId.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = state.entities.concat(action.payload.tags);
      })
      .addCase(fetchTagsByUserId.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTagToStore, removeTag, removeAll } = tagsSlice.actions;
export default tagsSlice.reducer;
