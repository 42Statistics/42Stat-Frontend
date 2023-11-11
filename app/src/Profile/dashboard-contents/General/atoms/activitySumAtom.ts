import { atom } from 'jotai';

const initialActivitySum = {
  logTime: 0,
  event: 0,
  corrector: 0,
  corrected: 0,
};

export const activitySumAtom = atom(initialActivitySum);
