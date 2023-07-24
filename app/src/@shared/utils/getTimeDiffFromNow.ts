import {
  MILLISECONDS_IN_A_DAY,
  MILLISECONDS_IN_A_HOUR,
  MILLISECONDS_IN_A_MINUTE,
  MILLISECONDS_IN_A_SECOND,
} from '@shared/constants/Date';

type TimeDiffType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day';

export const getTimeDiffFromNow = (
  date: Date,
  type: TimeDiffType = 'millisecond',
) => {
  const diff = date.getTime() - Date.now();
  const sign = diff >= 0 ? 1 : -1;
  switch (type) {
    case 'day':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS_IN_A_DAY);
    case 'hour':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS_IN_A_HOUR);
    case 'minute':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS_IN_A_MINUTE);
    case 'second':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS_IN_A_SECOND);
    case 'millisecond':
    default:
      return diff;
  }
};
