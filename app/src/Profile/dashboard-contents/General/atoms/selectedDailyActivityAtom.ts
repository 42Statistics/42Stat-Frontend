import { atom } from 'jotai';

import { DailyActivityRecord } from '@shared/__generated__/graphql';

type DailyActivity = {
  date: string;
  records: DailyActivityRecord[];
  login: string;
};

const initialDailyActivity: DailyActivity = {
  date: '',
  records: [],
  login: '',
};

export const selectedDailyActivityAtom =
  atom<DailyActivity>(initialDailyActivity);
