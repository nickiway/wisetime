import { IRestConfiguration, IWorkConfiguration } from "@/types/pomodorro";

// profile serttings
interface IProfileSettings {
  username: string;
  image: string;
}

interface IPomodorroTimerSettings {
  workConfig: IWorkConfiguration;
  restConfig: IRestConfiguration;
}

interface INotificationSettings {}

interface ISettings {}
