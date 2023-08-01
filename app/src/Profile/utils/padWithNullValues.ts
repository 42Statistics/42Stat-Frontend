export const padWithNullValues = (
  series: { x: number; y: number }[],
  length: number,
) => {
  const concatArray = [...Array(length - series.length)].map((_, index) => ({
    x: series.length + index,
    y: null,
  }));
  return [...series, ...concatArray];
};
