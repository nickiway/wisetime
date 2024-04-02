export interface IPomodorroInterval {
  duration: {
    long: number;
    short: number;
  };
}

export interface IPomodorroCounter {
  count: number;
}

// rest configuration
export interface IRestConfiguration
  extends IPomodorroInterval,
    IPomodorroCounter {}

// work configuration
export interface IWorkConfiguration
  extends IPomodorroInterval,
    IPomodorroCounter {}
