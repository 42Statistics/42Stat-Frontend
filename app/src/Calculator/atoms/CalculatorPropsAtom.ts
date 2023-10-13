import { atom } from 'jotai';

type CalculatorProps = {
  currentLevel: number;
  currentBlackhole: number;
  daysFromStart: number;
};

export const calculatorPropsAtom = atom<CalculatorProps>({
  currentLevel: 0,
  currentBlackhole: 0,
  daysFromStart: 0,
});
