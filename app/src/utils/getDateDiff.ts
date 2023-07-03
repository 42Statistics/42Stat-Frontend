export const getDateDiff = (
  dateTo: Date,
  dateFrom: Date = new Date(),
): number => {
  const ONE_DAY_MILLI_SEC = 24 * 60 * 60 * 1000;
  const diff = dateTo.getTime() - dateFrom.getTime();
  const diffInDays = Math.floor(diff / ONE_DAY_MILLI_SEC);
  return diffInDays;
};
