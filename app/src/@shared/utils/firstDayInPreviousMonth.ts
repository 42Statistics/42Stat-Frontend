export const firstDayInPreviousMonth = (date: Date, month: number) => {
  return new Date(date.getFullYear(), date.getMonth() - month, 1);
};
