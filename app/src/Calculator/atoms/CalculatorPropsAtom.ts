import { atom } from 'jotai';

type CalculatorProps = {
  currentLevel: number;
  daysFromStart: number;
};

export const calculatorPropsAtom = atom<CalculatorProps>({
  currentLevel: 0,
  daysFromStart: 0,
});
