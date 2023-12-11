export const getYearsBetween = (date1: Date, date2: Date) => {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const beginYear = Math.min(year1, year2);
  const endYear = Math.max(year1, year2);

  const years = Array.from(
    { length: endYear - beginYear + 1 },
    (_, index) => beginYear + index,
  );

  return years;
};
