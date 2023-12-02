import { sum } from 'lodash-es';

import { getScoreByDailyActivityType } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getScoreByDailyActivityType';
import {
  DailyActivity,
  DailyActivityType,
} from '@shared/__generated__/graphql';

export const calculateDailyActivityScoresByCategory = (
  list: DailyActivity[],
) => {
  const totalScoresByType = {
    logTime: 0,
    event: 0,
    corrector: 0,
    corrected: 0,
  };

  list.forEach(({ records }) => {
    records.forEach((record) => {
      const { __typename, type } = record;
      if (__typename === 'DailyLogtimeRecord') {
        totalScoresByType.logTime += record.value;
      } else if (type === DailyActivityType.Event) {
        totalScoresByType.event += 1;
      } else if (type === DailyActivityType.Corrector) {
        totalScoresByType.corrector += 1;
      } else if (type === DailyActivityType.Corrected) {
        totalScoresByType.corrected += 1;
      }
    });
  });

  return totalScoresByType;
};
