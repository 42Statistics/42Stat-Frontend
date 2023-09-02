import { atom } from 'jotai';

type Subject = {
  id: number;
  name: string;
  blackhole: number;
  level: number;
};

const SubjectListAtom = atom<Subject[]>([]);

export default SubjectListAtom;
