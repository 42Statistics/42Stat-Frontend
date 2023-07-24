import {
  MILLISECONDS_IN_A_DAY,
  MILLISECONDS_IN_A_HOUR,
  MILLISECONDS_IN_A_MINUTE,
} from '@shared/constants/Date';
import { getTimeDiffFromNow } from '../getTimeDiffFromNow';

export const timeDiffStringFormatter = (date: Date) => {
  const diff = getTimeDiffFromNow(date);
  const diffAbs = Math.abs(diff);
  const diffDaysAbs = Math.floor(diffAbs / MILLISECONDS_IN_A_DAY);
  if (diffDaysAbs) {
    return diff < 0 ? `${diffDaysAbs}일 전` : `${diffDaysAbs}일 후`;
  }
  const diffHoursAbs = Math.floor(diffAbs / MILLISECONDS_IN_A_HOUR);
  if (diffHoursAbs > 0) {
    return diff < 0 ? `${diffHoursAbs}시간 전` : `${diffHoursAbs}시간 후`;
  }
  const diffMinutesAbs = Math.floor(diffAbs / MILLISECONDS_IN_A_MINUTE);
  if (diffMinutesAbs > 0) {
    return diff < 0 ? `${diffMinutesAbs}분 전` : `${diffMinutesAbs}분 후`;
  }
  return diff < 0 ? `방금 전` : `곧`;
};
