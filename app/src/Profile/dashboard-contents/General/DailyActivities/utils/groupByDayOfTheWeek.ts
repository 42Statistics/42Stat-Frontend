import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { DailyActivity } from '@shared/__generated__/graphql';

// 첫 날짜가 수요일이라면, 일요일부터 화요일까지는 한 칸을 -1로 채움.
export const groupByDayOfTheWeek = (datesWithScores: DailyActivityScore[]) => {
  const group = datesWithScores.reduce(
    (acc, dateWithScore) => {
      const day = dateWithScore.date.getDay();
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(dateWithScore);
      return acc;
    },
    {} as Record<number, DailyActivityScore[]>,
  );

  const dayOfFirstDate = datesWithScores[0].date.getDay();

  for (let day = 0; day < dayOfFirstDate; day++) {
    group[day].unshift({
      date: new Date(),
      score: -1,
      records: [] as DailyActivity['records'],
    });
  }
  return group;
};
