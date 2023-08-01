export const kiloFormatter = (value: number, fixed = 2): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(fixed)}M`;
  } else {
    return `${(value / 1000).toFixed(fixed)}K`;
  }
};
