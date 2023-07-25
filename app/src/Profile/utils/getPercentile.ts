export const getPercentile = (value: number, total: number) => {
  if (total === 0) {
    return 0;
  }
  if (value > total) {
    return 0;
  }
  return Math.round(((total - value) / total) * 100);
};
