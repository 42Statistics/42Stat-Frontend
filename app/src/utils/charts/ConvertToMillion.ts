export const convertToMillion = (num: number, fixed: number = 2) => {
  return (num / 1000000).toFixed(fixed) + 'M';
};
