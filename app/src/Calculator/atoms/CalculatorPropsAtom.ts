import { atom } from 'jotai';

type CalculatorProps = {
  currentLevel: number;
  daysFromStart: number;
};

const CalculatorPropsAtom = atom<CalculatorProps>({
  currentLevel: 0,
  daysFromStart: 0,
});

export default CalculatorPropsAtom;
