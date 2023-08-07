/**
 * 날짜만 비교하는 함수
 * @returns 1: date2가 미래, -1: data1이 미래, 0: 같음
 */
export const compareDateDiff = (date1: Date, date2: Date) => {
  if (date1.getFullYear() !== date2.getFullYear()) {
    return date1.getFullYear() < date2.getFullYear() ? 1 : -1;
  }
  if (date1.getMonth() !== date2.getMonth()) {
    return date1.getMonth() < date2.getMonth() ? 1 : -1;
  }
  if (date1.getDate() !== date2.getDate()) {
    return date1.getDate() < date2.getDate() ? 1 : -1;
  }
  return 0;
};
