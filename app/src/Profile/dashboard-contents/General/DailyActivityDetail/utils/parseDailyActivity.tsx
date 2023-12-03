import {
  DailyActivity,
  DailyActivityDetailRecordIdWithType,
  DailyDefaultRecord,
  DailyLogtimeRecord,
} from '@shared/__generated__/graphql';

export const parseDailyActivity = (
  records: DailyActivity['records'],
): {
  dailyRecords: DailyActivityDetailRecordIdWithType[];
  timeRecord: number;
} => {
  return records.reduce(
    (
      result: {
        dailyRecords: DailyActivityDetailRecordIdWithType[];
        timeRecord: number;
      },
      record: DailyDefaultRecord | DailyLogtimeRecord,
    ) => {
      if ('value' in record) {
        //DailyLogtimeRecord
        result.timeRecord += record.value;
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
      timeRecord: 0,
    },
  );
};
