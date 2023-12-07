import { sum } from 'lodash-es';

import { DailyActivity } from '@shared/__generated__/graphql';

import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { getScoreByDailyActivityType } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getScoreByDailyActivityType';

export const calculateDailyActivityScores = (
  list: DailyActivity[],
): DailyActivityScore[] => {
  return list.map(({ date, records }) => ({
    date: new Date(date),
    score: calculateDailyActivityScore(records),
    records: records,
  }));
};

const calculateDailyActivityScore = (records: DailyActivity['records']) => {
  return sum(records.map((record) => getScoreByDailyActivityType(record)));
};
