export const isShortString = (a: string, b: string): number => {
  const aLength = a.length;
  const bLength = b.length;
  if (aLength < bLength) {
    return -1;
  } else if (aLength > bLength) {
    return 1;
  } else {
    return 0;
  }
};
