import {
  DailyAcitivtyType,
  DailyActivityRecord,
} from '@shared/__generated__/graphql';
import { MILLISECONDS } from '@shared/constants/date';

export const getScoreByDailyActivityType = (record: DailyActivityRecord) => {
  if (record.__typename === 'DailyDefaultRecord') {
    switch (record.type) {
      case DailyAcitivtyType.Corrected:
        return 1;
      case DailyAcitivtyType.Corrector:
        return 1;
      case DailyAcitivtyType.Event:
        return 1;
      default:
        throw new Error(`Unexpected DailyActivityType: ${record.type}`);
    }
  }

  if (record.__typename === 'DailyLogtimeRecord') {
    switch (record.type) {
      case DailyAcitivtyType.Logtime:
        return Math.ceil(record.value / MILLISECONDS.HOUR);
      default:
        throw new Error(`Unexpected DailyActivityType: ${record.type}`);
    }
  }

  throw new Error(`Unexpected DailyActivityRecord: ${record.__typename}`);
};