import { atom } from 'jotai';

export const calculatorDialogAtom = atom({
  isOpen: false,
  focus: -1,
});
