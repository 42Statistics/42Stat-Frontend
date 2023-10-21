import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';

export const dDayFormatter = (date: Date) => {
  const diffDays = getTimeDiffFromNow(date, 'day');
  const diffDaysAbs = Math.abs(diffDays);
  if (diffDays === 0) {
    return 'D-Day';
  }
  return `D${diffDays < 0 ? '+' : '-'}${diffDaysAbs}`;
};
