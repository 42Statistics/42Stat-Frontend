export const MILLISECONDS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 3600,
  DAY: 1000 * 3600 * 24,
  WEEK: 1000 * 3600 * 24 * 7,
  MONTH: 1000 * 3600 * 24 * 30,
  YEAR: 1000 * 3600 * 24 * 365,
} as const;

export const MINUTES = {
  MILLISECOND: 1 / 1000,
  SECOND: 1 / 60,
  HOUR: 60,
  DAY: 60 * 24,
  WEEK: 60 * 24 * 7,
  MONTH: 60 * 24 * 30,
  YEAR: 60 * 24 * 365,
} as const;
