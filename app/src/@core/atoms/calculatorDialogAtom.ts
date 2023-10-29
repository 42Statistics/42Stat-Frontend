import { atom } from 'jotai';

export const calculatorDialogAtom = atom({
  isOpen: false,
  description: '',
  focus: -1,
});
