export const millionFormatter = (value: number, fixed = 2): string => {
  return `${(value / 1000000).toFixed(fixed)}M`;
};
