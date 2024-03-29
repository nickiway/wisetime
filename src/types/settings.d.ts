import { IRestConfiguration, IWorkConfiguration } from "@/types/pomodorro";

// profile serttings
interface IProfileSettings {
  username: string;
  image: string;
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
