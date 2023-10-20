import dayjs from 'dayjs';

import { compareDateDiff } from '@shared/utils/compareDateDiff';

export const getStartEndDateString = (
  start: Date,
  end: Date,
  format = 'YYYY-MM-DD',
) => {
  return `${
    start.getTime() !== 0 ? dayjs(start).format(format) : '42 시작'
  } ~ ${
    compareDateDiff(new Date(), end) < 0 ? dayjs(end).format(format) : '현재'
  }`;
};
