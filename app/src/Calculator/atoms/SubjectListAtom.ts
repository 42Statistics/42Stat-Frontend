import { atom } from 'jotai';
import { Subject } from '../types/orderItemButton';

export const subjectListAtom = atom<Subject[]>([]);
