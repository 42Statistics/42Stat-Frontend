import { atom } from 'jotai';

type ExpTables = {
  expMaxTable: number[];
  expReqTable: number[];
};

export const expTablesAtom = atom<ExpTables>({
  expMaxTable: [],
  expReqTable: [],
});
