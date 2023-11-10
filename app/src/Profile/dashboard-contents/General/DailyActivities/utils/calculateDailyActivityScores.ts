import { sum } from 'lodash-es';

import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { getScoreByDailyActivityType } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getScoreByDailyActivityType';
import { DailyActivity } from '@shared/__generated__/graphql';

export const calculateDailyActivityScores = (
  list: DailyActivity[],
): DailyActivityScore[] => {
  return list.map(({ date, records }) => ({
    date: new Date(date),
    score: calculateDailyActivityScore(records),
  }));
};

const calculateDailyActivityScore = (records: DailyActivity['records']) => {
  return sum(records.map((record) => getScoreByDailyActivityType(record)));
};
