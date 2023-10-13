import { atom } from 'jotai';
import { Subject } from '@/Calculator/types/OrderItemButton';

export const subjectListAtom = atom<Subject[]>([]);
