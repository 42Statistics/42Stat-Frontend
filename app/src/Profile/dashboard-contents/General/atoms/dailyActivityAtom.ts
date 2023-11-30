import { atom } from 'jotai';
import { DailyActivity } from '@shared/__generated__/graphql';

const initialDailyActivity: DailyActivity = {
  date: '',
  records: [],
};

export const dailyActivityAtom = atom<DailyActivity>(initialDailyActivity);
