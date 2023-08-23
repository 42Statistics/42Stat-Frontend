import { MILLISECONDS } from '@shared/constants/(tmp)date';

type TimeDiffType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day';

export const getTimeDiffFromNow = (
  date: Date,
  type: TimeDiffType = 'millisecond',
) => {
  const diff = date.getTime() - Date.now();
  const sign = diff >= 0 ? 1 : -1;
  switch (type) {
    case 'day':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS.DAY);
    case 'hour':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS.HOUR);
    case 'minute':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS.MINUTE);
    case 'second':
      return sign * Math.floor(Math.abs(diff) / MILLISECONDS.SECOND);
    case 'millisecond':
    default:
      return diff;
  }
};
