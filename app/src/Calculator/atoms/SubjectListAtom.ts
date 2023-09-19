import { atom } from 'jotai';

export type Subject = {
  id: number;
  name: string;
  exp: number | null;
  score: number;
  bonus: boolean;
  blackhole: number;
  startLevel: number;
  finishLevel: number;
};

export const SubjectListAtom = atom<Subject[]>([]);
