export const getPercentile = (rank: number, total: number) => {
  if (total === 0) {
    return 0;
  }
  if (rank === 0) {
    return 0;
  }
  if (rank > total) {
    return 0;
  }
  return Math.round(((total - rank) / total) * 100);
};
