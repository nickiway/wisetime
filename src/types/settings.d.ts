import { IRestConfiguration, IWorkConfiguration } from "@/types/pomodorro";

// profile settings
interface IProfileSettings {
  firstName: string;
  lastName: string;
  birthDate?: Date;
  gender?: "male" | "female" | "other";
  website?: string;
  country?: string;
}

// pomodorro settings
interface IPomodorroTimerSettings {
  workConfig: IWorkConfiguration;
  restConfig: IRestConfiguration;
}

// global settings
export interface ISettings {
  profile: IProfileSettings;
  pomodorro: IPomodorroTimerSettings;
}
