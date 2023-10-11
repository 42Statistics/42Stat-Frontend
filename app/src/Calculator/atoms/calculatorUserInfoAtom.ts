import { atom } from 'jotai';

type CalculatorUserInfo = {
  currentLevel: number;
  currentBlackhole: number;
  daysFromStart: number;
};

export const calculatorUserInfoAtom = atom<CalculatorUserInfo>({
  currentLevel: 0,
  currentBlackhole: 0,
  daysFromStart: 0,
});
