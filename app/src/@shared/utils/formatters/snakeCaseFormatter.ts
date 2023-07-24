export const snakeCaseFormatter = (str: string) => {
  return str.split(' ').join('_').toLowerCase();
};
