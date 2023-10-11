import { atom } from 'jotai';

import type { Subject } from '@/Calculator/types/OrderItemButtonGroup';

export const subjectListAtom = atom<Subject[]>([]);
