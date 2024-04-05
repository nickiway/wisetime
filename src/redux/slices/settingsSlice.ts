import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { ISettings } from "@/types/settings";
import type { Types } from "mongoose";
import type { ILoading, IError } from "@/types/general";

export const fetchSettingsById = createAsyncThunk(
  "fetchSettings",
  async (_id: Types.ObjectId | string) => {
    const data = (await fetch(`/api/settings/${_id}`)).json();

    if (!data) {
      throw new Error("There is no settings");
    }

    return data;
  }
);

const initialState = {
  loading: "idle",
  error: null,

  pomodorro: {
    restConfig: {
      count: 4,
      duration: { long: 15, short: 5 },
    },

    workConfig: {
      count: 4,
      duration: { long: 15, short: 5 },
    },
  },
  profile: {
    firstName: "",
    lastName: "",
  },
} as ISettings & ILoading & IError;

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateFirstName(state, { payload }) {
      state.profile.firstName = payload;
    },

    updateLastName(state, { payload }) {
      state.profile.lastName = payload;
    },

    updatePomodorroSliceSettings(state, { payload }) {
      state.pomodorro = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettingsById.pending, (state, _) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSettingsById.fulfilled, (state, actions) => {
      state.loading = "succeeded";

      state.pomodorro = actions.payload.pomodorro;
      state.profile = actions.payload.profile;
    });
    builder.addCase(fetchSettingsById.rejected, (state, actions) => {
      state.loading = "failed";
      state.error = actions.error.message ?? "Something went wrong";
    });
  },
});

export const { updateFirstName, updatePomodorroSliceSettings, updateLastName } =
  settingsSlice.actions;
export default settingsSlice.reducer;
