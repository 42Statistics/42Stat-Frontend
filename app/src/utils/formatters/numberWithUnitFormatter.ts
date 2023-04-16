// FIXME: 함수명 변경. localeStringFormatter?
export const numberWithUnitFormatter = (
  value: number,
  unit: string = '',
): string => {
  return `${value.toLocaleString()}${unit}`;
};
