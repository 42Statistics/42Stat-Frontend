import { atom } from 'jotai';

export const isNavBarOpenAtom = atom(false);

export const toggleIsNavBarOpenAtom = atom(null, (get, set) =>
  set(isNavBarOpenAtom, !get(isNavBarOpenAtom)),
);
