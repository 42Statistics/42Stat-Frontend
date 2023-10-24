import { atom } from 'jotai';

export const isDialogOpenAtom = atom({
  isOpen: false,
  title: '',
  description: '',
  confirmText: '',
});
