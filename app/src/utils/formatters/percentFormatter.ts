export const percentFormatter = (a: number, b: number): string => {
  return Math.round((a / b) * 1000) / 10 + '%';
};
