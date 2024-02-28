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
