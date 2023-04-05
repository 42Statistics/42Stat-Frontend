import { getDateTime } from '@/utils/getTimeNow';

export const getDayDiff = (thenTime: string): number => {
  const currentDate = new Date();
  const thenDate = new Date(
    getDateTime(thenTime).year,
    getDateTime(thenTime).month - 1,
    getDateTime(thenTime).day,
  );

  const ONE_DAY_MILLI_SEC = 24 * 60 * 60 * 1000; // 하루의 밀리초 수

  // 두 날짜의 차이 계산
  const diffInMilliseconds = currentDate.getTime() - thenDate.getTime();
  const diffInDays = Math.round(diffInMilliseconds / ONE_DAY_MILLI_SEC);

  return diffInDays;
};
