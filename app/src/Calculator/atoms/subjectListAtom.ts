import { atom } from 'jotai';

import type { Subject } from '@/Calculator/types/OrderItemButtonGroup';

export const emptySubject: Subject = {
  id: 0,
  name: '',
  exp: null,
  expEdited: null,
  score: 100,
  blackhole: 0,
  bonus: false,
  startLevel: 0,
  finishLevel: 0,
};

export const subjectListAtomInitialValue: Subject[] = [emptySubject];

export const subjectListAtom = atom<Subject[]>(subjectListAtomInitialValue);
