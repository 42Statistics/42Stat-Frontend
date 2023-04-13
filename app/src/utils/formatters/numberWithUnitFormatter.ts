export const numberWithUnitFormatter = (
  value: number,
  unit: string = '',
): string => {
  return `${value.toLocaleString()}${unit}`;
};
