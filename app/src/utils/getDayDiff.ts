export const getDayDiff = (timeFirst: Date, timeSecond: Date): number => {
  const ONE_DAY_MILLI_SEC = 24 * 60 * 60 * 1000; // 하루의 밀리초 수

  // 두 날짜의 차이 계산
  const diffInMilliseconds = timeSecond.getTime() - timeFirst.getTime();
  const diffInDays = Math.round(diffInMilliseconds / ONE_DAY_MILLI_SEC);

  return Math.abs(diffInDays);
};
