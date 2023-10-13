import { atom } from 'jotai';

type CalculatorProps = {
  currentLevel: number;
  daysFromStart: number;
};

export const CalculatorPropsAtom = atom<CalculatorProps>({
  currentLevel: 0,
  daysFromStart: 0,
});
