import { atom } from 'jotai';
import { DailyActivity } from '@shared/__generated__/graphql';

const initialActivityDaily: DailyActivity = {
  date: '',
  records: [],
};

export const activityDailyAtom = atom<DailyActivity>(initialActivityDaily);
