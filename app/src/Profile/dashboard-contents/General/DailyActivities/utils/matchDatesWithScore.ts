import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import type { DateWithScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DateWithScore';
import { isSameDate } from '@shared/utils/isSameDate';

export const matchDatesWithScores = (
  dates: Date[],
  scores: DailyActivityScore[],
): DateWithScore[] => {
  let currentScoreIndex = 0;

  return dates.map((date) => {
    if (currentScoreIndex >= scores.length) {
      return { date, score: 0 };
    }
    const dailyActivityScore = scores[currentScoreIndex];
    if (isSameDate(dailyActivityScore.date, date)) {
      currentScoreIndex++;
      return { date, score: dailyActivityScore.score };
    }
    return { date, score: 0 };
  });
};
