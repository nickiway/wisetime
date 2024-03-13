// formating the date number to double digit
export const doubleDigitFormat = (value: number): string | number =>
  value < 10 ? "0" + value : value;

//   converting date to hh:mm
export const convertToHhMm = (date: number): string => {
  const finalDate = new Date(date);

  const minutes = doubleDigitFormat(finalDate.getMinutes());
  const hours = doubleDigitFormat(finalDate.getHours());

  return [hours, minutes].join(":");
};

//   converting date to dd/mo
export const convertToDdMo = (date: number): string => {
  const finalDate = new Date(date);

  const day = doubleDigitFormat(finalDate.getDate());
  const month = doubleDigitFormat(finalDate.getMonth() + 1);

  return `${day}/${month}`;
};

export const ticksToTime = (ticks: number): string => {
  const hours = Math.floor(ticks / (3600 * 1000));
  const minutes = Math.floor((ticks % (3600 * 1000)) / (60 * 1000));
  const seconds = Math.floor((ticks % (60 * 1000)) / 1000);

  const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};
