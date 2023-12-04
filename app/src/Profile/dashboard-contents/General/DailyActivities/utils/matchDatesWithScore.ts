import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import type { DailyActivity } from '@shared/__generated__/graphql';
import { isSameDate } from '@shared/utils/isSameDate';

export const matchDatesWithScores = (
  dates: Date[],
  scores: DailyActivityScore[],
): DailyActivityScore[] => {
  let currentScoreIndex = 0;

  return dates.map((date) => {
    if (currentScoreIndex >= scores.length) {
      return { date, score: 0, records: [] as DailyActivity['records'] };
    }
    const dailyActivityScore = scores[currentScoreIndex];
    if (isSameDate(dailyActivityScore.date, date)) {
      currentScoreIndex++;
      return {
        date,
        score: dailyActivityScore.score,
        records: dailyActivityScore.records,
      };
    }
    return { date, score: 0, records: [] as DailyActivity['records'] };
  });
};
