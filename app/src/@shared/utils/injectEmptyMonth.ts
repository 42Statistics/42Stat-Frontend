import { isSameMonth, isSameYear } from 'date-fns';

export const injectEmptyMonth = (
  series: { x: Date; y: number }[],
  last: number,
) => {
  const result = [];

  let currIndex = 0;

  for (let i = last - 1; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);

    if (
      currIndex < series.length &&
      isSameYear(series[currIndex].x, date) &&
      isSameMonth(series[currIndex].x, date)
    ) {
      result.push(series[currIndex]);
      currIndex++;
    } else {
      result.push({ x: date, y: 0 });
    }
  }

  return result;
};
