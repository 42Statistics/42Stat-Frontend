import {
  DailyActivity,
  DailyActivityDetailRecordIdWithType,
  DailyDefaultRecord,
  DailyLogtimeRecord,
} from '@shared/__generated__/graphql';

export const parseDailyActivity = (records: DailyActivity['records']) => {
  return records.reduce(
    (
      result: {
        dailyRecords: DailyActivityDetailRecordIdWithType[];
        dailyLogtime: number;
      },
      record: DailyDefaultRecord | DailyLogtimeRecord,
    ) => {
      if ('value' in record) {
        //DailyLogtimeRecord
        result.dailyLogtime += record.value;
      } else {
        //DailyDefaultRecord
        result.dailyRecords.push({
          id: record.id,
          type: record.type,
        });
      }
      return result;
    },
    {
      dailyRecords: [],
      dailyLogtime: 0,
    },
  );
};
