import { atom } from 'jotai';

import type { Subject } from '@/Calculator/types/Subject';

export const emptySubject = (index: number) => {
  return {
    id: index,
    name: '',
    exp: 0,
    expEdited: 0,
    score: 100,
    blackhole: 0,
    bonus: false,
    startLevel: 0,
    finishLevel: 0,
  };
};

export const subjectListAtomInitialValue: Subject[] = [emptySubject(0)];

export const subjectListAtom = atom<Subject[]>(subjectListAtomInitialValue);
