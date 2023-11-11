import { DailyActivity } from '@shared/__generated__/graphql';

export type DailyActivityScore = {
  date: Date;
  score: number;
  records: DailyActivity['records'];
};
