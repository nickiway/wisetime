interface IPomodorroInterval {
  duration: {
    long: number;
    short: number;
  };
}

interface IPomodorroNotification {
  file: {
    filepath: string;
  };

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
