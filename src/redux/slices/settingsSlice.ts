import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { ISettings } from "@/types/settings";
import type { Types } from "mongoose";
import type { ILoading, IError } from "@/types/general";

export const fetchSettingsById = createAsyncThunk(
  "fetchSettings",
  async (_id: Types.ObjectId | string) => {
    const data = (await fetch(`/api/settings/1`)).json();

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
      soundNotificationEnabled: true,
      file: {
        filepath: "",
      },
    },

    workConfig: {
      count: 4,
      duration: { long: 15, short: 5 },
      soundNotificationEnabled: true,
      file: {
        filepath: "",
      },
    },
  },
  profile: {
    image: "",
    username: "",
  },
} as ISettings & ILoading & IError;

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSettingsById.fulfilled, (state, actions) => {
      state.loading = "succeeded";

      //   TODO: write api
      //   state.pomodorro = actions.payload.pomodorro;
      //   state.profile = actions.payload.profile;
    });
    builder.addCase(fetchSettingsById.rejected, (state, actions) => {
      state.loading = "failed";
      state.error = actions.error.message ?? "Something went wrong";
    });
  },
});

export const {} = settingsSlice.actions;
export default settingsSlice.reducer;
