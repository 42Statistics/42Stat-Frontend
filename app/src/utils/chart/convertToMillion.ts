export const convertToMillion = (num: number, fixed = 2) => {
  return (num / 1000000).toFixed(fixed) + 'M';
};
