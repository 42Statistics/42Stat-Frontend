export const parsePageNumber = (str: string | null) => {
  if (str === null) {
    return 1;
  }
  return Number(str);
};

export const stringifyPageNumber = (pageNumber: number) => {
  return String(pageNumber);
};
