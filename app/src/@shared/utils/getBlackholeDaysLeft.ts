import { MILLISECONDS_IN_A_DAY } from '@shared/constants/Date';
import { getTimeDiffFromNow } from './getTimeDiffFromNow';

/**
 * 인트라의 blackholed_at은 실제 블랙홀에 빠지는 시점이 아니라 a few hours left가 뜨는 시점인 듯하다.
 * @returns 0 (a few hours left)
 * @returns -1 (absorbed by black hole)
 */
export const getBlackholeDaysLeft = (date: Date) => {
  const diff = getTimeDiffFromNow(date);
  const daysLeft = Math.ceil(diff / MILLISECONDS_IN_A_DAY);
  return daysLeft < 0 ? -1 : daysLeft;
};