export const getDatesBetween = (from: Date, to: Date) => {
  const dates = [];
  for (
    let date = new Date(from);
    date <= to;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }
  return dates;
};
