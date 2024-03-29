interface IPomodorroInterval {
  duration: {
    long: number;
    short: number;
  };
}

interface IPomodorroNotification {
  filepath: string;
  soundNotificationEnabled: boolean;
}

interface IPomodorroCounter {
  count: number;
}

// rest configuration
export interface IRestConfiguration
  extends IPomodorroInterval,
    IPomodorroNotification,
    IPomodorroCounter {}

// work configuration
export interface IWorkConfiguration
  extends IPomodorroInterval,
    IPomodorroNotification,
    IPomodorroCounter {}
