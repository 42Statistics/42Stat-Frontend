import { differenceInCalendarDays, differenceInCalendarMonths } from 'date-fns';

export const MILLISECONDS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 3600,
  DAY: 1000 * 3600 * 24,
  WEEK: 1000 * 3600 * 24 * 7,
  MONTH: 1000 * 3600 * 24 * 30,
  YEAR: 1000 * 3600 * 24 * 365,
} as const;

export const FT_BEGIN_AT = new Date('2020-01-20');
export const CALENDAR_MONTHS_FROM_FT_BEGIN_AT = differenceInCalendarMonths(
  new Date(),
  FT_BEGIN_AT,
);
export const CALENDAR_DAYS_FROM_FT_BEGIN_AT = differenceInCalendarDays(
  new Date(),
  FT_BEGIN_AT,
);

export const MINUTES = {
  MILLISECOND: 1 / 1000,
  SECOND: 1 / 60,
  HOUR: 60,
  DAY: 60 * 24,
  WEEK: 60 * 24 * 7,
  MONTH: 60 * 24 * 30,
  YEAR: 60 * 24 * 365,
} as const;
