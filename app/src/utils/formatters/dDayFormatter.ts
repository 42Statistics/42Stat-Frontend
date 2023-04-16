export const dDayFormatter = (value: number) => {
  if (value === 0) {
    return 'D-Day';
  }
  if (value > 0) {
    return `D+${value}`;
  }
  return `D${value}`;
};
