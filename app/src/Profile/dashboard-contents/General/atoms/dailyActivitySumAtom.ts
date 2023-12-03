import { atom } from 'jotai';

export const dailyActivitySumAtom = atom({
  logTime: 0,
  event: 0,
  corrector: 0,
  corrected: 0,
});
