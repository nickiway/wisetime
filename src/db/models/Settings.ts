import { Schema, model, models, Types } from "mongoose";

import {
  ISettings,
  IProfileSettings,
  IPomodorroTimerSettings,
} from "@/types/settings";

import { IRestConfiguration, IWorkConfiguration } from "@/types/pomodorro";

export interface ISettingsCreatedBy {
  createdBy: Types.ObjectId;
}

const schemaRestConfig = new Schema<IRestConfiguration>({
  count: Number,
  duration: {
    long: Number,
    short: Number,
  },
});

const schemaWorkConfig = new Schema<IWorkConfiguration>({
  count: Number,
  duration: {
    long: Number,
    short: Number,
  },
});

const schemaProfileSettings = new Schema<IProfileSettings>({
  firstName: String,
});

const schemaPomodorroSettings = new Schema<IPomodorroTimerSettings>({
  restConfig: schemaRestConfig,
  workConfig: schemaWorkConfig,
});

const schemaSettings = new Schema<ISettings & ISettingsCreatedBy>({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  pomodorro: {
    type: schemaPomodorroSettings,
    default: {
      restConfig: {
        count: 4,
        duration: {
          long: 15,
          short: 5,
        },
      } as IRestConfiguration,
      workConfig: {
        count: 4,
        duration: {
          long: 30,
          short: 20,
        },
      } as IWorkConfiguration,
    } as IPomodorroTimerSettings,
  },
  profile: {
    type: schemaProfileSettings,
    default: {
      firstName: "",
    },
  },
});

export const Settings =
  models.Settings ||
  model<ISettings & ISettingsCreatedBy>("Settings", schemaSettings);
